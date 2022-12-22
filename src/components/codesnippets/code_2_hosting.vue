<template>
<!-- HTML generated using hilite.me -->
<div style="background:#fff;overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em"><table><tr><td><pre style="margin:0;line-height:125%"> 1
 2
 3
 4
 5
 6
 7
 8
 9
10
11
12
13</pre></td><td><pre style="margin:0;line-height:125%"><span style="background-color:#fff0f0">&quot;data&quot;</span><span style="color:red;background-color:#faa">:</span> {
    <span style="color:#070">&quot;url&quot;</span>: <span style="background-color:#fff0f0">&quot;https://api.coronavirus.data.gov.uk/v2/data?areaType=ltla&amp;metric=newCasesBySpecimenDate&amp;format=csv&quot;</span>,
    <span style="color:#070">&quot;format&quot;</span>: {<span style="color:#070">&quot;type&quot;</span>: <span style="background-color:#fff0f0">&quot;csv&quot;</span>}
  }<span style="color:red;background-color:#faa">,</span>

   <span style="background-color:#fff0f0">&quot;transform&quot;</span><span style="color:red;background-color:#faa">:</span>[

      {<span style="color:#070">&quot;filter&quot;</span>: {
        <span style="color:#070">&quot;field&quot;</span>: <span style="background-color:#fff0f0">&quot;areaName&quot;</span>, 
        <span style="color:#070">&quot;oneOf&quot;</span>: [<span style="background-color:#fff0f0">&quot;Croydon&quot;</span>, <span style="background-color:#fff0f0">&quot;Sheffield&quot;</span>, <span style="background-color:#fff0f0">&quot;Manchester&quot;</span>, <span style="background-color:#fff0f0">&quot;Birmingham&quot;</span>]}
        }

    ]<span style="color:red;background-color:#faa">,</span>
</pre></td></tr></table></div>
</template>

<script>
export default {
   name: "code_2_hosting",

}
</script>
