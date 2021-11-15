var debug = false
if (debug) {
  var profile = {gravatar_id: "a5b4032eaad882492772f4d6d34a9122"}
} else {
  var profile = {}
}
var languages = {}
var totalBytes = 0
var chart

$(function(){
	
	var self=this

  $('#embed').click(function() { $(this).select() })
  $('#render').click(function() { 
    check = function($s) {
      var s = $s.val()
      return (s >= parseInt($s.attr('min')) && s <= parseInt($s.attr('max')))
    }
    if (check($('#size')) && check($('#radius'))) {
      updateLanguageGraph()
    }
  })
	
	this.showresults=function(username) {
		$(".result").show()
    $("#start").hide()

    //_gaq.push(['_trackPageView', '/github-language-graph/'+username])

    var repos = []
    var completed = 0

    $("#result-username").text(username)
    $("#username").val("")

    if (!debug) {
      $.getJSON("https://api.github.com/users/"+username+"?callback=?", function(data) {
        profile = data.data

        $.getJSON("https://api.github.com/users/"+username+"/repos?callback=?", function(data) {
          $(data.data).each(function(i,d) {
            repos.push(d.url+"/languages")
            completed++
          })


          $("#result-repo-count").text(repos.length + " Repositories")
          $(repos).each(function(i,r) {
            $.getJSON(r+"?callback=?", function(data) {
              for(lang in data.data) {
                var lines = data.data[lang]
                if(!languages[lang]) {
                  languages[lang] = lines
                } else {
                  languages[lang] += lines
                }
              }

              // draw graph when finished
              if (!--completed) updateLanguageGraph()

            })
          })
        })
      })
    } else {
      updateLanguageGraph()
    }
  }
	
	$("#btn-go").click(function(){
		var username = $("#username").val()
		
		window.location.hash='#'+username
		
		self.showresults(username)

		return false
	})

	if (window.location.hash)
		self.showresults(window.location.hash.substr(1))
})

function updateLanguageGraph() {
  if (debug) {
    languages = {
      "Java": 288116,
      "C++": 288116,
      "C#": 288116,
      "Shell": 253,
      "JavaScript": 1069530,
      "CoffeeScript": 66623,
      "XSLT": 66623,
    }
  }
  
  var data = []

  totalBytes = 0
  for(lang in languages) {
    data.push({name: lang, y: languages[lang]})
    totalBytes += languages[lang]

  }

  data.sort(function(a, b) {
    return b.y - a.y
  })

  $("#language-table tbody").html('')
  for(var i=0; i<data.length; i++) {
    $("#language-table tbody").append(
      $('<tr>')
        .append($('<td>').text(data[i].name)
          .prepend($('<span>').html("&#9724 ")).css("color", colors(data[i].name)))
        .append($('<td>').text(data[i].y))
    )
  }

  //chart.series[0].setData(data)
  var s = $('#size').val()
  var w = s,                        //width
      h = s,                            //height
      r = s/2                            //radius
      avatar = $('#radius').val()/100

  $("#chart").html('')
  $("#chart").css({position: "relative", width: w, height: h})

  if (avatar != 0) {
    $("#chart").append(
      $('<div id="chart-inner">')
        .css({
          textAlign: "center",
          position: "absolute", 
          top: Math.round(s*(1-avatar)/2 - 1), 
          left: Math.round(s*(1-avatar)/2 - 1), 
          width: Math.round(s*(avatar) + 2), 
          height: Math.round(s*(avatar) + 2),
          borderRadius: "100%",
        }).append(
          $("<img>")
            .attr("src", "https://secure.gravatar.com/avatar/"+profile.gravatar_id+"?s="+s)
            .css({ borderRadius: "100%" })
        )
    )
  }
   
  if (avatar != 1) {
    var vis = d3.select("#chart")
        .append("svg:svg")              //create the SVG element inside the <body>
        .data([data])                   //associate our data with the document
            .attr("width", w)           //set the width and height of our visualization (these will be attributes of the <svg> tag
            .attr("height", h)
        .append("svg:g")                //make a group to hold our pie chart
            .attr("transform", "translate(" + r + "," + r + ")")    //move the center of the pie chart from 0, 0 to radius, radius

    $("svg").css({position: "relative", zIndex: 2})

    var arc = d3.svg.arc()              //this will create <path> elements for us using arc data
        .innerRadius(Math.round(r * avatar))
        .outerRadius(r)

    var pie = d3.layout.pie()           //this will create arc data for us given a list of values
        .value(function(d) { return d.y })    //we must tell it out to access the value of each element in our data array

    var arcs = vis.selectAll("g.slice")     //this selects all <g> elements with class slice (there aren't any yet)
        .data(pie)                          //associate the generated pie data (an array of arcs, each having startAngle, endAngle and value properties) 
        .enter()                            //this will create <g> elements for every "extra" data element that should be associated with a selection. The result is creating a <g> for every object in the data array
            .append("svg:g")                //create a group to hold each slice (we will have a <path> and a <text> element associated with each slice)
                .attr("class", "slice")     //allow us to style things in the slices (like text)
                .attr("data-lang-name", function(d) { return d.data.name })
                .attr("data-lang-percent", function(d) { return Math.round(d.data.y/totalBytes*100) + "%" })
                .attr("data-lang-color", function(d) { return colors(d.data.name) })

        arcs.append("svg:path")
                .attr("fill", function(d, i) { return colors(d.data.name) } ) //set the color for each slice to be chosen from the color function defined above
                .attr("d", arc)                                     //this creates the actual SVG path using the associated data (pie) with the arc drawing function
  }

  var fontSize = Math.round(s*avatar/6)

  //for(var i=0; i<data.length; i++) {
    $('#chart-inner').append(
      $('<div>').attr('id', "lang")
        //.addClass("lang-"+replaceSpecialChars(data[i].name))
        .append($("<div>").attr('id', 'lang-name').css({fontSize: fontSize+"px", lineHeight: fontSize+"px"}))
        .append($("<div>").attr('id', 'lang-percent').css({fontSize: fontSize+"px", lineHeight: fontSize+"px", opacity: 0.5}))
      .css({
        position: "absolute",
        top: 0,
        left: 0,
        //backgroundColor: colors(data[i].name),
        color: "#fff",
        borderRadius: "100%",
        paddingTop: Math.round((s*avatar/2) - fontSize) + "px",
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        opacity: 0
      })
    )
  //}

  var script = ""+
    "<script>"+
      "$('#chart g.slice').mouseenter(function() {"+
        "$('#lang').css({opacity: 1, backgroundColor: $(this).data('lang-color')});"+
        "$('#lang-name').text($(this).data('lang-name'));"+
        "$('#lang-percent').text($(this).data('lang-percent'));"+
      "});"+
      "$('#chart').mouseleave(function() {"+
        "$('#lang').css({opacity: 0});"+
      "});"+
    "</script>";

  $('#chart').append($(script));
  $('#embed').val($('#chart-container').html().replace(/^\s+|\s+$/g, ''));
}

/*
var replaceSpecialChars = function(text) {
  text = text.replace(/\+/g, "plus");
  text = text.replace(/\#/g, "sharp");
  return text
}
*/

function colors(lang) {
  return githubLanguageColors[lang] || "#ccc"
}

// https://github.com/doda/github-language-colors
githubLanguageColors = {
    "Arduino": "#bd79d1",
    "Java": "#b07219",
    "VHDL": "#543978",
    "Scala": "#7dd3b0",
    "Emacs Lisp": "#c065db",
    "Delphi": "#b0ce4e",
    "Ada": "#02f88c",
    "VimL": "#199c4b",
    "Perl": "#0298c3",
    "Lua": "#fa1fa1",
    "Rebol": "#358a5b",
    "Verilog": "#848bf3",
    "Factor": "#636746",
    "Ioke": "#078193",
    "R": "#198ce7",
    "Erlang": "#949e0e",
    "Nu": "#c9df40",
    "AutoHotkey": "#6594b9",
    "Clojure": "#db5855",
    "Shell": "#5861ce",
    "Assembly": "#a67219",
    "Parrot": "#f3ca0a",
    "C#": "#5a25a2",
    "Turing": "#45f715",
    "AppleScript": "#3581ba",
    "Eiffel": "#946d57",
    "Common Lisp": "#3fb68b",
    "Dart": "#cccccc",
    "SuperCollider": "#46390b",
    "CoffeeScript": "#244776",
    "XQuery": "#2700e2",
    "Haskell": "#29b544",
    "Racket": "#ae17ff",
    "Elixir": "#6e4a7e",
    "HaXe": "#346d51",
    "Ruby": "#701516",
    "Self": "#0579aa",
    "Fantom": "#dbded5",
    "Groovy": "#e69f56",
    "C": "#555",
    "JavaScript": "#f15501",
    "D": "#fcd46d",
    "ooc": "#b0b77e",
    "C++": "#f34b7d",
    "Dylan": "#3ebc27",
    "Nimrod": "#37775b",
    "Standard ML": "#dc566d",
    "Objective-C": "#438eff",
    "Nemerle": "#0d3c6e",
    "Mirah": "#c7a938",
    "Boo": "#d4bec1",
    "Objective-J": "#ff0c5a",
    "Rust": "#dea584",
    "Prolog": "#74283c",
    "Ecl": "#8a1267",
    "Gosu": "#82937f",
    "FORTRAN": "#4d41b1",
    "ColdFusion": "#ed2cd6",
    "OCaml": "#3be133",
    "Fancy": "#7b9db4",
    "Pure Data": "#f15501",
    "Python": "#3581ba",
    "Tcl": "#e4cc98",
    "Arc": "#ca2afe",
    "Puppet": "#cc5555",
    "Io": "#a9188d",
    "Max": "#ce279c",
    "Go": "#8d04eb",
    "ASP": "#6a40fd",
    "Visual Basic": "#945db7",
    "PHP": "#6e03c1",
    "Scheme": "#1e4aec",
    "Vala": "#3581ba",
    "Smalltalk": "#596706",
    "Matlab": "#bb92ac",
    "C#": "#bb92af"
}
