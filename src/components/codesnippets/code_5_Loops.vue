<template>
<!-- HTML generated using hilite.me -->
<div
                        style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;">
                        <pre style="margin: 0; line-height: 125%"><span style="color: #008800; font-weight: bold">import</span> <span style="color: #0e84b5; font-weight: bold">requests</span>
<span style="color: #008800; font-weight: bold">import</span> <span style="color: #0e84b5; font-weight: bold">json</span>
<span style="color: #008800; font-weight: bold">import</span> <span style="color: #0e84b5; font-weight: bold">os</span>
<span style="color: #008800; font-weight: bold">import</span> <span style="color: #0e84b5; font-weight: bold">csv</span>

<span style="color: #888888"># insert URL with api Key </span>
url_base <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;https://api.stlouisfed.org/fred/series/observations?series_id={}&amp;api_key=22ee7a76e736e32f54f5df0a7171538d&amp;file_type=json&quot;</span>
file_base <span style="color: #333333">=</span> <span style="background-color: #fff0f0">&quot;FREDdata_{}.json&quot;</span>
fredSeries <span style="color: #333333">=</span> [<span style="background-color: #fff0f0">&#39;WFRBLB50107&#39;</span>,<span style="background-color: #fff0f0">&#39;WFRBLT01026&#39;</span>,<span style="background-color: #fff0f0">&#39;WFRBSB50189&#39;</span>,<span style="background-color: #fff0f0">&#39;WFRBST01108&#39;</span>]
<span style="color: #008800; font-weight: bold">for</span> i <span style="color: #000000; font-weight: bold">in</span> fredSeries:
    URL <span style="color: #333333">=</span> url_base<span style="color: #333333">.</span>format(i)
    data <span style="color: #333333">=</span> requests<span style="color: #333333">.</span>get(URL)<span style="color: #333333">.</span>json()
    <span style="color: #888888">#print(data)</span>
    fileName <span style="color: #333333">=</span> file_base<span style="color: #333333">.</span>format(i)
    <span style="color: #008800; font-weight: bold">print</span>(fileName)
    <span style="color: #007020">open</span>(fileName, <span style="background-color: #fff0f0">&#39;w&#39;</span>)
    <span style="color: #008800; font-weight: bold">with</span> <span style="color: #007020">open</span>(fileName, <span style="background-color: #fff0f0">&#39;w&#39;</span>, encoding<span style="color: #333333">=</span><span style="background-color: #fff0f0">&#39;utf-8&#39;</span>) <span style="color: #008800; font-weight: bold">as</span> f:
        json<span style="color: #333333">.</span>dump(data, f, ensure_ascii<span style="color: #333333">=</span><span style="color: #007020">False</span>, indent<span style="color: #333333">=</span><span style="color: #0000DD; font-weight: bold">4</span>)
        <span style="color: #008800; font-weight: bold">print</span>(i, <span style="background-color: #fff0f0">&quot; Data from &quot;</span>, URL, <span style="background-color: #fff0f0">&#39; dumped.&#39;</span>)
</pre>
                     </div>
</template>

<script>
export default {
   name: "code_5_loops",

}
</script>
