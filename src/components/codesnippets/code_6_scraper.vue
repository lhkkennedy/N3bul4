<template>
<!-- HTML generated using hilite.me -->
<div style="background:#f0f0f0;overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em"><pre style="margin:0;line-height:125%"><span style="color:#007020;font-weight:700">import</span> <span style="color:#0e84b5;font-weight:700">numpy</span> <span style="color:#007020;font-weight:700">as</span> <span style="color:#0e84b5;font-weight:700">np</span>
<span style="color:#007020;font-weight:700">import</span> <span style="color:#0e84b5;font-weight:700">pandas</span> <span style="color:#007020;font-weight:700">as</span> <span style="color:#0e84b5;font-weight:700">pd</span>
<span style="color:#007020;font-weight:700">import</span> <span style="color:#0e84b5;font-weight:700">requests</span>
<span style="color:#007020;font-weight:700">import</span> <span style="color:#0e84b5;font-weight:700">string</span>
<span style="color:#007020;font-weight:700">from</span> <span style="color:#0e84b5;font-weight:700">bs4</span> <span style="color:#007020;font-weight:700">import</span> BeautifulSoup
<span style="color:#007020;font-weight:700">import</span> <span style="color:#0e84b5;font-weight:700">os</span>
<span style="color:#007020;font-weight:700">import</span> <span style="color:#0e84b5;font-weight:700">time</span>

<span style="color:#60a0b0;font-style:italic">## Using Multiple URLs ##</span>
URL_base <span style="color:#666">=</span> <span style="color:#4070a0">&quot;https://ukfinance.yahoo.com/quote/{}&quot;</span>
tickers <span style="color:#666">=</span> [<span style="color:#4070a0">&quot;AMZN&quot;</span>, <span style="color:#4070a0">&quot;TSLA&quot;</span>, <span style="color:#4070a0">&quot;AAPL&quot;</span>, <span style="color:#4070a0">&quot;NVDA&quot;</span>, <span style="color:#4070a0">&quot;MSFT&quot;</span>, <span style="color:#4070a0">&quot;OEX.L&quot;</span>]

<span style="color:#60a0b0;font-style:italic">## create Data Frame to add data by column ##</span>
df <span style="color:#666">=</span> pd<span style="color:#666">.</span>DataFrame()

<span style="color:#60a0b0;font-style:italic">## code from previous scraper placed in a for loop ##</span>
<span style="color:#007020;font-weight:700">for</span> t <span style="color:#007020;font-weight:700">in</span> tickers:

    s <span style="color:#666">=</span> tickers<span style="color:#666">.</span>index(t)
    response <span style="color:#666">=</span> requests<span style="color:#666">.</span>request(<span style="color:#4070a0">&quot;GET&quot;</span>, <span style="color:#4070a0">&quot;https://uk.finance.yahoo.com/quote/{}&quot;</span><span style="color:#666">.</span>format(t), headers<span style="color:#666">=</span>{<span style="color:#4070a0">&#39;USER-AGENT&#39;</span>: <span style="color:#4070a0">&quot;Mozilla/5.0&quot;</span>})
    soup <span style="color:#666">=</span> BeautifulSoup(response<span style="color:#666">.</span>content, <span style="color:#4070a0">&quot;html.parser&quot;</span>)

    <span style="color:#007020;font-weight:700">print</span>(<span style="color:#4070a0">&quot;..................................................&quot;</span>)

    heading_soup <span style="color:#666">=</span>soup<span style="color:#666">.</span>find_all(<span style="color:#4070a0">&quot;h1&quot;</span>, class_<span style="color:#666">=</span><span style="color:#4070a0">&quot;D(ib) Fz(18px)&quot;</span>)
    name_u <span style="color:#666">=</span> heading_soup[<span style="color:#40a070">0</span>]<span style="color:#666">.</span>text
    x <span style="color:#666">=</span> name_u<span style="color:#666">.</span>split(<span style="color:#4070a0">&quot;, &quot;</span>)
    <span style="color:#007020;font-weight:700">if</span> <span style="color:#4070a0">&quot; &quot;</span> <span style="color:#007020;font-weight:700">in</span> x[<span style="color:#40a070">0</span>]:
        x <span style="color:#666">=</span> name_u<span style="color:#666">.</span>split(<span style="color:#4070a0">&quot; &quot;</span>)
        name <span style="color:#666">=</span> x[<span style="color:#40a070">0</span>]
    <span style="color:#007020;font-weight:700">else</span>:
        name <span style="color:#666">=</span> x[<span style="color:#40a070">0</span>]
    <span style="color:#007020;font-weight:700">print</span>(<span style="color:#4070a0">&quot;Name: &quot;</span>, name)


    price_soup <span style="color:#666">=</span> soup<span style="color:#666">.</span>find_all(<span style="color:#4070a0">&quot;fin-streamer&quot;</span>, class_<span style="color:#666">=</span><span style="color:#4070a0">&quot;Fw(b) Fz(36px) Mb(-4px) D(ib)&quot;</span>)
    price <span style="color:#666">=</span> price_soup[<span style="color:#40a070">0</span>]<span style="color:#666">.</span>text
    <span style="color:#007020;font-weight:700">print</span>(<span style="color:#4070a0">&quot;Price: &quot;</span>, price)

    ticker <span style="color:#666">=</span> t
    <span style="color:#007020;font-weight:700">print</span>(<span style="color:#4070a0">&quot;Ticker :&quot;</span>, ticker)

    change_soup <span style="color:#666">=</span> soup<span style="color:#666">.</span>find_all(<span style="color:#4070a0">&quot;fin-streamer&quot;</span>, class_<span style="color:#666">=</span><span style="color:#4070a0">&#39;Fw(500) Pstart(8px) Fz(24px)&#39;</span>)
    change_u <span style="color:#666">=</span> change_soup[<span style="color:#40a070">0</span>]<span style="color:#666">.</span>text
    x <span style="color:#666">=</span> change_u<span style="color:#666">.</span>split(<span style="color:#4070a0">&quot;+&quot;</span>)
    <span style="color:#007020;font-weight:700">if</span> <span style="color:#007020">len</span>(x) <span style="color:#666">==</span> <span style="color:#40a070">2</span>:
        change <span style="color:#666">=</span> x[<span style="color:#40a070">1</span>]
    <span style="color:#007020;font-weight:700">else</span>:
        change <span style="color:#666">=</span> x[<span style="color:#40a070">0</span>]

    perc_change_u <span style="color:#666">=</span> change_soup[<span style="color:#40a070">1</span>]<span style="color:#666">.</span>text
    x <span style="color:#666">=</span> perc_change_u<span style="color:#666">.</span>split(<span style="color:#4070a0">&quot;+&quot;</span>)
    <span style="color:#007020;font-weight:700">if</span> <span style="color:#007020">len</span>(x) <span style="color:#666">==</span> <span style="color:#40a070">2</span>:
        x <span style="color:#666">=</span> x[<span style="color:#40a070">1</span>]<span style="color:#666">.</span>split(<span style="color:#4070a0">&quot;%&quot;</span>)
    <span style="color:#007020;font-weight:700">else</span>:
        x <span style="color:#666">=</span> x[<span style="color:#40a070">0</span>]<span style="color:#666">.</span>split(<span style="color:#4070a0">&quot;(&quot;</span>)
        x <span style="color:#666">=</span> x[<span style="color:#40a070">1</span>]<span style="color:#666">.</span>split(<span style="color:#4070a0">&quot;%&quot;</span>)
    perc_change <span style="color:#666">=</span> x[<span style="color:#40a070">0</span>]


    <span style="color:#007020;font-weight:700">print</span>(<span style="color:#4070a0">&quot;Change from open: &quot;</span>, change)
    <span style="color:#007020;font-weight:700">print</span>(<span style="color:#4070a0">&quot;Percentage change: &quot;</span>, perc_change)
    <span style="color:#007020;font-weight:700">print</span>(<span style="color:#4070a0">&quot;Adding to dataframe&quot;</span>)

    date <span style="color:#666">=</span> pd<span style="color:#666">.</span>to_datetime(<span style="color:#4070a0">&#39;now&#39;</span>, format<span style="color:#666">=</span><span style="color:#4070a0">&#39;%Y-%m-</span><span style="color:#70a0d0;font-style:italic">%d</span><span style="color:#4070a0"> %H:%M:%S&#39;</span>)
    results <span style="color:#666">=</span> [date, name, price, ticker, perc_change, change]
    df_t <span style="color:#666">=</span> pd<span style="color:#666">.</span>DataFrame(results)
    df_t<span style="color:#666">.</span>columns <span style="color:#666">=</span> [<span style="color:#4070a0">&#39;Data&#39;</span>]
    df[s] <span style="color:#666">=</span> df_t[<span style="color:#4070a0">&#39;Data&#39;</span>]

<span style="color:#60a0b0;font-style:italic">#transpose</span>
df <span style="color:#666">=</span> df<span style="color:#666">.</span>T

<span style="color:#60a0b0;font-style:italic">#name columns</span>
df<span style="color:#666">.</span>columns <span style="color:#666">=</span> [<span style="color:#4070a0">&#39;date&#39;</span>, <span style="color:#4070a0">&#39;name&#39;</span>, <span style="color:#4070a0">&#39;price&#39;</span>, <span style="color:#4070a0">&#39;ticker&#39;</span>, <span style="color:#4070a0">&#39;percentage_change&#39;</span>, <span style="color:#4070a0">&#39;change&#39;</span>]

<span style="color:#007020;font-weight:700">print</span>(<span style="color:#4070a0">&quot;..................................................&quot;</span>)
<span style="color:#007020;font-weight:700">print</span>(<span style="color:#4070a0">&quot;Data Frame: &quot;</span>, df)

<span style="color:#60a0b0;font-style:italic">#save to csv</span>
filename <span style="color:#666">=</span> <span style="color:#4070a0">&#39;stockPrices.csv&#39;</span>
abspath <span style="color:#666">=</span> os<span style="color:#666">.</span>path<span style="color:#666">.</span>abspath(__file__)
dname <span style="color:#666">=</span> os<span style="color:#666">.</span>path<span style="color:#666">.</span>dirname(abspath)
os<span style="color:#666">.</span>chdir(dname)
filelocation <span style="color:#666">=</span> os<span style="color:#666">.</span>getcwd()
<span style="color:#007020;font-weight:700">print</span>(<span style="color:#4070a0">&quot;Saving as:  [ &quot;</span> <span style="color:#666">+</span> filename <span style="color:#666">+</span> <span style="color:#4070a0">&quot; ]  in:  [ &quot;</span> <span style="color:#666">+</span> filelocation <span style="color:#666">+</span> <span style="color:#4070a0">&quot; ] &quot;</span>)
df<span style="color:#666">.</span>to_csv(filename)
</pre></div>
</template>

<script>
export default {
   name: "code_6_scraper",

}
</script>
