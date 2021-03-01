<template>
    <div>
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">First Name</label>
                <input type="text" v-model="contact.Name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Phone Number</label>
                <input type="number" v-model="contact.PhoneNumber" class="form-control" id="exampleInputPassword1" placeholder="Phone Number">
            </div>
            <button type="button" ref="SubmitButton"  v-on:click="SaveData" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
const AddContact = defineComponent({
    data() {
        return {
          contact: {
              Name: "",
              PhoneNumber: 0,
              Slug: "" 
          }
        }
    },
    methods:{
        SaveData(): boolean
        {
            this.$data.contact.Slug = this.$data.contact.Name.toLowerCase()
            const contactArray = localStorage.getItem('contact');
            const contactObj = JSON.parse(contactArray ?? '[]');
            contactObj.push(this.$data.contact)  
            localStorage.setItem('contact', JSON.stringify(contactObj))
            return true;
        }
    }
})
export default AddContact;
</script>