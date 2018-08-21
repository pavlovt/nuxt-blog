<template>
  <div class="form-group search-container">
    <label :for="id">{{label}}</label>
    <input :type="type" class="form-control xauto" v-model="query" :id="id" :placeholder="info" v-bind="$attrs">
    <img class="search-icon" src="/svg/icons/black.svg">
    <!-- <small :id="id+Help" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
  </div>
</template>

<script>
  import autoComplete from 'js-autocomplete' 
  import 'js-autocomplete/auto-complete.css'
  import { observer } from "mobx-vue";

  export default observer ({
    name: 'xauto',
    // ['label', 'name', 'placeholder', 'id', 'type'],
    props: {
      value: String | Number,
      label: String,
      // text value to show in the input
      text: String,
      name: String,
      placeholder: String,
      id: {
        type: String,
        default: function (val) {
          return val || `form-${this.name}`;
        }
      },
      type: {
        type: String,
        default: 'text'
      },
      selection : String ,
    },
    data() {
      return {
        query : '',
        el: {},
        da: 'da',
        info: 'search for people, rooms, equipment,etc',
        searchStore : store.search
      }
    },
    methods: {
      // update(val) {
      //   this.$emit('input', val)
      // }
    },
    mounted() {
      // if (!_.isEmpty(this.text)) this.$el.querySelector('input.xauto').value = this.text
      // this.el = new autoComplete({
      //  selector: this.$el.querySelector('input.xauto'),
      //   minChars: 1,
      //   delay: 150,
      //   cache: true,
      //   source: (term, suggest) => {
      //     term = term.toLowerCase();
      //     suggest(_.filter(this.data, v => v.text.indexOf(term) > -1));
      //   },
      //   renderItem: (item, search) => {
      //     return `
      //           <div class="autocomplete-suggestion" data-val="${item.text}" data-id="${item.id}">
      //             ${item.text}
      //           </div>
      //         `;
      //   },
      //   onSelect: (e, term, item) => {
      //     this.update(item.getAttribute('data-id'))
      //   }
      // });

      const self = this;
      var searchAC = new autoComplete({
        selector: '.xauto',
        delay : 0,
        minChars: 2,
        cache : false,
        source: function (term, suggest) {
              self.searchStore.search(self.selection , self.query).then((result)=>{
              //console.log(self.searchStore.searchResults.length);
              //self.searchStore.addShowAll({isShowAll:true , value : self.query}).then(()=>{
                suggest(result)
              //})
          });
        },
       renderItem: function (item, search) {
          //  Rendering item in case its standard suggestion
           if(!item.isShowAll){
           return '<div class="autocomplete-suggestion row">'
            //  User image.
            + '<div class="col-2"> <img class="avatar-sm" src="' +  item.imageUrl + '"> </div>' 
            // end of User image.
            // User information 
            + '<div class="col-10 user-info">'
            + '<div class="user-name"> ' + item.firstName + ' ' + item.lastName + '</div>'
            + '<div class="user-position"> '+item.jobTitle + ', ' + item.unit+ '</div> '
            + '<div class="user-location"> floor 2, room Pirin</div>'
            + '<div class="user-interests">'
            + _(item.interests).map(v => `<span class="interests-list">${v.name} </span> `).take(4).value().join('')
            + '</div>'
            + '</div>'
            //// end of User information 
            + '</div>';
            }


             //  Rendering item in case its showAll  suggestion
            // else{
            // return '<div class="autocomplete-suggestion row ">'
            // //  User image.
            // + '<div class="col-2"> <img class="avatar-sm" src="data:image/jpeg;base64,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"> </div>' 
            // // end of User image.
            // // User information 
            // + '<div class="col-10 user-info show-all">'
            // + '<div class="user-name">' + item.value + '</div>'
            // + '<div class="user-position"> Show all ' + item.value +'</div> '
            // + '</div>'
            // + '</div>'
            // //// end of User information 
            // + '</div>';
            // }
        },
        onSelect: function (e, term, item) {
          alert(item.querySelector(".user-name").textContent);
        },
      });
    },
  });
</script>

<style lang="scss" scopped>
  .search-container {
    width: 30%;
  }
   // AutoComplete suggestions styles
  .autocomplete-suggestion {
    height: 130px;
    border-bottom: solid 1px #e2e2e2;
    border-bottom: solid 1px #e2e2e2;
  }
  .autocomplete-suggestions {
    margin-top : 14px;
    margin-right : 15px;
    width: 570px !important;
    max-height: 500px;
    min-height : 100px;    
    box-shadow: 0 2px 10px 0 #7f7f7f;
  }
  .user-info {
    margin-top : 10px;
    margin-bottom : 10px;
  }
  .user-name {
    font-size : 19px;
    font-weight : bold;
  }
  .show-all{
    margin: auto;
    width: 50%;
    padding: 10px;
  }
  .user-position{
    margin-top : -3px;
    font-size : 16px;
    font-style : italic;
  }
  .user-location{
    margin-top : -3px;
   
  }
  .user-interests{
    margin-top : -3px;
    color :  #00a6ce;
  }
  .avatar-sm {
    border-radius : 50%;
    width: 70px !important ;
    height: 70px  !important;
    display: block;
    margin-left: 8px;
    margin-top: 14px;
  }
  .interests-list {
        float: left;
        min-width: 10%;
        border-radius: 4px;
        border: solid 2px #48dbff;
        font-size: 12px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        letter-spacing: normal;
        text-align: center;
        color: #545454;
        margin-left : 3px;
        margin-right : 3px;
        padding-left : 3px;
        padding-right : 3px;
    }
    .autocomplete-suggestion:hover{
      border-left :4px solid #48dbff;
      background-color: white;
      margin : 0px;
      padding: 0px;

    }
  //end of  AutoComplete suggestions styles

</style>