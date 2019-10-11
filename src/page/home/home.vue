<template>
    <div class="home">    
        <about/>
        <know-more/>
        <educational-background/>
        <project/>
        <skill/>
        <contact/> 
        
    </div>

</template>

<script>
import about from '../../components/about'
import knowMore from '../../components/know-more'
import educationalBackground from '../../components/educational-background'
import project from '../../components/project'
import skill from '../../components/skill'
import contact from '../../components/contact'


export default {
    name:"home",
    data(){
        return{

        }
    },
    components:{
        about,
        knowMore,
        educationalBackground,
        project,
        skill,
        contact
    }
    
}
</script>

<style scoped>
.home{
		min-width: 1200px;
		height: auto;
        
	}
</style>

