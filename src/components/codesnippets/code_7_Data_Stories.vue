<template>
<!-- HTML generated using hilite.me -->
<div style="background:#f0f0f0;overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em"><pre style="margin:0;line-height:125%">clear
import delimited using <span style="color:#4070a0">&quot;C:</span><span style="border:1px solid red">\</span><span style="color:#4070a0">Users</span><span style="border:1px solid red">\</span><span style="color:#4070a0">lhkke</span><span style="border:1px solid red">\</span><span style="color:#4070a0">OneDrive - University of Bristol</span><span style="border:1px solid red">\</span><span style="color:#4070a0">Documents</span><span style="border:1px solid red">\</span><span style="color:#4070a0">Work</span><span style="border:1px solid red">\</span><span style="color:#4070a0">Year_3</span><span style="border:1px solid red">\</span><span style="color:#4070a0">Data_Science</span><span style="border:1px solid red">\</span><span style="color:#4070a0">project</span><span style="border:1px solid red">\</span><span style="color:#4070a0">html</span><span style="border:1px solid red">\</span><span style="color:#4070a0">json</span><span style="border:1px solid red">\</span><span style="color:#4070a0">7_Data_Stories</span><span style="border:1px solid red">\</span><span style="color:#4070a0">UKenergyProduction.xls&quot;</span>

rename total totalMt
rename coal coalMt
rename natural naturalMt
rename windsolarandhydro windsolarandhydroMt
rename bioenergywaste bioenergywasteMt
rename nuclear nuclearMt
rename petroleum petroleumMt

reshape long @Mt, i(date) j(<span style="color:#007020;font-weight:700">type</span><span style="border:1px solid red">)</span> string

export delimited using <span style="color:#4070a0">&quot;UkenergyProduction&quot;</span>, replace
</pre></div>
</template>

<script>
export default {
   name: "code_7_Data_Stories",

}
</script>
