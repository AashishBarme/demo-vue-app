<template>
    <div>
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input v-model="object.Name" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Phone Number</label>
                <input v-model="object.PhoneNumber" type="number" class="form-control" id="exampleInputPassword1" placeholder="Phone Number">
            </div>
             <button type="button" ref="SubmitButton"  v-on:click="SaveData" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>
<script lang="ts">
/* eslint-disable */
import { defineComponent } from 'vue';
const EditContact = defineComponent({ 
    data(){
        return {
            object:{
                Name: "",
                PhoneNumber: 0,
                Slug: ""
            },
            routeData : this.$route.params.slug
        }
    },
    
    methods:{
        GetData(): void
        {
             const storageData = localStorage.getItem('contact');
             const list = JSON.parse(storageData ?? '[]');
             list.forEach((element: any) => {
                 if(element.Slug == this.routeData)
                 {
                    this.$data.object = element
                 }
             });
             
        },
        SaveData(): boolean
        {
            const storageData = localStorage.getItem('contact');
            const list = JSON.parse(storageData ?? '[]');
            const filtered = list.filter((el: any) => { return el.Slug != this.routeData; });
            filtered.push(this.$data.object);
            localStorage.setItem('contact', JSON.stringify(filtered));
            return true;
        }
    },
    mounted(){
        this.GetData();
    }
});
export default EditContact;
</script>