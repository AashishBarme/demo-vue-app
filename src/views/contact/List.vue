<template>
    <div>
        <p><router-link class="btn btn-success" to="/contact/add">Add</router-link></p>
        <table class="table table-bordered">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in list" :key="item.Slug">
                <th scope="row">{{++index}}</th>
                <td>{{item.Name}}</td>
                <td>{{item.PhoneNumber}}</td>
                <td>
                    <router-link class="btn btn-primary" :to='{ name: "EditContact", params:{ slug: item.Slug }}' title="Edit">
                       Edit
                    </router-link>  
                </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
const AddContact = defineComponent({
    data() {
        return {
          list: {}
        }
    },
    methods:{
        LoadData(): void
        {
            const contactList = localStorage.getItem('contact');
            this.$data.list = JSON.parse(contactList ?? '[]');
        }
    },
    mounted(){
        this.LoadData();
    }
})
export default AddContact;
</script>