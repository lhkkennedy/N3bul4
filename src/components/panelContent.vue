<template>
    <div class="cardList">
    <div class="cd-content" :key="index" v-for="(card, index) in content.content">
        <div class="sideCard">
            <div class="blog-details">
                <h3><b>{{card.blogDetails}}</b></h3>
            </div>
            <div :id="card.chartid" class="chart center"></div>
            <div class="blog-description">
                <h5 v-if="card.blogDescription">{{card.blogDescription}}<br>
                    <span v-if="card.date" class="date">{{card.date}}</span>
                </h5>
                <h6 v-if="card.blogText">{{card.blogText}}</h6>
                <h6 v-if="card.blogText2">{{card.blogText2}}</h6>
                <code_1_embedding v-if="card.codesrc === 'embedding_1'" />
                <code_2_hosting v-if="card.codesrc === 'hosting_1'"/>
                <code_2_hosting_2 v-if="card.codesrc === 'hosting_2'"/>
                <code_3_editing v-if="card.codesrc === 'editing_1'"/>
                <code_3_editing_2 v-if="card.codesrc === 'editing_2'"/>
                <code_4_API v-if="card.codesrc === 'API_1'"/>
                <Code_5_Loops v-if="card.codesrc === 'Loops_1'"/>
                <Code_5_Loops_2 v-if="card.codesrc === 'Loops_2'"/>
                <Code_6_scraper v-if="card.codesrc === 'Scraper_1'"/>
                <Code_7_Data_Stories v-if="card.codesrc === 'Stories_1'"/>

            </div>

        </div>
    </div>
    </div>
</template>

<script>
import vegaEmbed from 'vega-embed';
import code_1_embedding from './codesnippets/code_1_embedding.vue';
import code_2_hosting from './codesnippets/code_2_hosting.vue';
import code_2_hosting_2 from './codesnippets/code_2_hosting_2.vue';
import code_3_editing from './codesnippets/code_3_editing.vue';
import code_3_editing_2 from './codesnippets/code_3_editing_2.vue';
import code_4_API from './codesnippets/code_4_API.vue';
import Code_5_Loops from './codesnippets/code_5_Loops.vue';
import Code_5_Loops_2 from './codesnippets/code_5_Loops_2.vue';
import Code_6_scraper from './codesnippets/code_6_scraper.vue';
import Code_7_Data_Stories from './codesnippets/code_7_Data_Stories.vue';

export default {
    name: 'panelContent',
    props:{
        content: Object,
        card: Object,
    },
    components:{
    code_1_embedding,
    code_2_hosting,
    code_2_hosting_2,
    code_3_editing,
    code_3_editing_2,
    code_4_API,
    Code_5_Loops,
    Code_5_Loops_2,
    Code_6_scraper,
    Code_7_Data_Stories
},
    async created() {
        for (let i = 0; i < this.content.content.length; i++) {
            if (this.content.content[i].chartid) {
            var chartsel = this.content.content[i]
            vegaEmbed('#'+chartsel.chartid, chartsel.chartsrc)
        }
    }
    }
};

</script>


<style scoped>

.cardList:last-child{
    margin-bottom: 100px;
}

.cardList{
    padding-top: 64px;
}
.sideCard{
  padding: 40px;
  margin: 20px;
  color: black;
  background-color: white;
  box-shadow: 0 4px 10px 0 rgb(0 0 0 / 20%), 0 4px 20px 0 rgb(0 0 0 / 19%);
  overflow-x: hidden;
  overflow-y: hidden;
  border-radius: 25px;
  max-width: 100%;
}

.chart{
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 10px;
    
}
</style>