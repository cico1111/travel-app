import {getGeo} from './geoNames'

function handleSubmit(event) {
  console.log("qqqqqqqqqq")
    event.preventDefault()
    let formText = document.getElementById('formText').value 
    
    // if(formText.length==0){
    //   alert("you did not input anything")
    //   return
    // }
    let isURL=Client.checkForURL(formText)
   
    // //get key of api
    // getKey()
    // //get api data
    // .then(key=>getApiData(key,formText,isURL))
 getGeo()
   

    //function of getting api key
    async function getKey() {
      const response = await fetch("/key");
      try {
        // Transform into JSON
          const data = await response.json();      
          return data;
      } catch (error) {
          console.log("error:", error)
      }
    }  
   
    //function of getting api data and show it 
    const getApiData = async(api_Key,form_text,is_url) =>{
      const formdata = new FormData();  
      // add key to formdata  
      formdata.append("key", api_Key.key);
      //checking is url or is txt and add it to formdata
      if(is_url){
        formdata.append("url", form_text);
        console.log("formText is url")
      }else{
        formdata.append("txt", form_text);
        console.log("formText is txt")
      }  
      // add language en to formdata  
      formdata.append("lang", "en");
  
      const requestOptions = {method: 'POST', body: formdata, redirect: 'follow'};
  
     //getting data from api
      await fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
      .then(response => ({
          status: response.status, 
          body: response.json()
        })
      )
      .then(({ status, body }) =>{
        //get the value of body
        body.then(data=>{       
          //show the result from API 
          showData(data)
        }
      )
    })
    .catch(error => console.log('error', error))
  
    }
  
    // function of showing the result
    function showData(obj){
      //score_tag find the meaning of score_tag
      //array of all score_tag
      const _tag =["P+","P", "NEU", "N", "N+", "NONE"]
      //array of all score_tag's meaning(polarity) on _tag's order
      const tag =["strong positive", "positive", "neutral",  "negative","strong negative", "without polarity"]
      //find the index of score_tag's value  
      const tag_index = _tag.findIndex(element => element==obj.score_tag);
      
      //polarity is the tag_index'value
      const polarity = tag[tag_index]
      // show data
      document.getElementById('agreement').innerHTML = "Agreement:"+ obj.agreement
      document.getElementById('confidence').innerHTML = "Confidence:"+obj.confidence
      document.getElementById('irony').innerHTML = "Irony:"+obj.irony    
      document.getElementById('score_tag').innerHTML = "Polarity:" +polarity
      document.getElementById('subjectivity').innerHTML = "Subjectivity:"+obj.subjectivity
  
    }
  }
  
  export { handleSubmit }
  