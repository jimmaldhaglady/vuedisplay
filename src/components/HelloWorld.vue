<template>
  <div class="hello">
    <v-layout row justify-center>    
    <ul>
      <li v-for="(user, index) in users" :key="'index'">
        <h1><p v-on:click="getPosts(user.id)">
          {{user.name}}</p></h1>
        <p>User Id:{{user.id}}</p></br>
        <p>Email:{{user.email}}</p></br>
        <p>Address:</br>Street:{{user.address.street}}
        Suite:{{user.address.suite}}
        City:{{user.address.city}}
        ZipCode:{{user.address.zipcode}}</p></br>
        <p>Geo Location:</br>Latitude:{{user.lat}}
        Longitude:{{user.lng}}</p>
        <p>Phone:{{user.phone}}</p>
        <p>Website:{{user.website}}</p>
        <p>Company:</br>name:{{user.company.name}}
        Catch Phrase:{{user.company.catchPhrase}}
        BS:{{user.company.bs}}</p>
      </li>
    </ul>
    <v-dialog v-model="dialog" max-width="800px">
        <v-card>
          <v-card-title class="headline">Posts</v-card-title>
          <v-card-text>
            <template v-for="(post, index) in userPosts">
              <v-card>
                <v-card-title class="headline" v-on:click="activePostId=post.id">{{post.title}}</v-card-title>
                <v-card-text v-if="post.id==activePostId">
                  {{post.body}}
                </v-card-text>
              </v-card>
            </template>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" flat @click="dialog=false">Close</v-btn>
          </v-card-actions>
      </v-card>
          
      </v-dialog>
    </v-layout>
  </div>
</template>
<script>
import WebService from '@/services/WebService'
export default {
  name: 'HelloWorld',
  data () {
    return {
      dialog: false,
      activePostId: 0,
      users: {},
      posts: {},
      userPosts: {}
    }
  },
  mounted () {
    WebService.getCall('users').then((response)=>{
      this.users = response.data
    })
    WebService.getCall('posts').then((response)=>{
      this.posts = response.data
    })
  },
  methods: {
    getPosts (id) {
      var postList=[];
      var i=0;
      this.posts.map(function(value, key) {
        if(id == value.userId && i<10){
          i++
          postList.push(value);
        }
      });
      this.userPosts = postList
      this.dialog = true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
 font-weight: normal;
}
ul {
 list-style-type: none;
 padding: 0;
}
li {
 display: inline-block;
 margin: 0 10px;
}
a {
 color: #42b983;
}
</style>
