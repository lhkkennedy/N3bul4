<template>
<!-- HTML generated using hilite.me -->
<div
   style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;">
   <pre style="margin: 0; line-height: 125%"><span style="color: #008800; font-weight: bold">import</span> <span style="color: #0e84b5; font-weight: bold">json</span>
   <span style="color: #008800; font-weight: bold">import</span> <span style="color: #0e84b5; font-weight: bold">pandas</span> <span style="color: #008800; font-weight: bold">as</span> <span style="color: #0e84b5; font-weight: bold">pd</span>

   file_base <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;FREDdata_WFRB{}.json&quot;</span>
   fredSeries <span style="color: #333333">=</span> [<span style="background-color: #fff0f0">&quot;LB50107&quot;</span>, <span style="background-color: #fff0f0">&quot;LT01026&quot;</span>, <span style="background-color: #fff0f0">&quot;SB50189&quot;</span>, <span style="background-color: #fff0f0">&quot;ST01108&quot;</span>]
   
   <span style="color: #888888"># for loops to iterate through multiple json files</span>
   <span style="color: #008800; font-weight: bold">for</span> i <span style="color: #000000; font-weight: bold">in</span> fredSeries:
       filename <span style="color: #333333">=</span> file_base<span style="color: #333333">.</span>format(i)
       <span style="color: #008800; font-weight: bold">with</span> <span style="color: #007020">open</span>(filename, <span style="background-color: #fff0f0">&quot;rb&quot;</span>) <span style="color: #008800; font-weight: bold">as</span> infile:
           
           <span style="color: #888888">#load the json file infile</span>
           data <span style="color: #333333">=</span> json<span style="color: #333333">.</span>load(infile)
   
           <span style="color: #888888"># normalise nested data - we only care about the data in &#39;observations&#39;</span>
           data <span style="color: #333333">=</span> pd<span style="color: #333333">.</span>json_normalize(data, <span style="background-color: #fff0f0">&quot;observations&quot;</span>)
           df <span style="color: #333333">=</span> pd<span style="color: #333333">.</span>DataFrame(data)
           <span style="color: #008800; font-weight: bold">print</span>(df)
           
           <span style="color: #888888">#export to csv file.</span>
           df<span style="color: #333333">.</span>to_csv (i<span style="color: #333333">+</span><span style="background-color: #fff0f0">&#39;.csv&#39;</span>)
   </pre>
</div>
</template>

<script>
export default {
   name: "code_3_editing",

}
</script>
