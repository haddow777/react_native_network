import React, { Component } from "react";
import { View, Text } from "react-native";
import axios from "axios";

class AlbumList extends Component {
  state = {
    outputVal: "Initial Value"
  };

  componentDidMount() {
    const that = this;
    //console.log("just before axios call");
    // const music = axios.create({
    //   timeout: 4000,
    //   //baseURL: "http://rallycoding.herokuapp.com"
    //   baseURL: "https://jsonplaceholder.typicode.com"
    // });
    // console.log("After axios created", music);
    // const promise = music
    //   //.get("/api/music_albums")
    //   .get("/users")
    //   .then(response => {
    //     console.log("response", response);
    //     that.setState({ outputVal: "Success!" });
    //   })
    //   .catch(e => {
    //     that.setState({ outputVal: "Failure" });
    //     console.log("ERROR:", e);
    //   })
    //   .then(() => console.log("Finish called"));

    // if (promise) console.log("Axios returned a promise");
    // console.log("promise: ", promise);
    // setTimeout(() => console.log("promise later:", promise), 5000);

    //fetch('http://rallycoding.herokuapp.com/api/music_albums')
    //fetch("https://jsonplaceholder.typicode.com/users")
    //fetch("http://10.180.47.117:3001/streams")
    // debugger;
    // fetch("https://jsonplaceholder.typicode.com/todos/")
    //   .then(response => {
    //     console.log("Got a response", response);
    //     response.json();
    //   })
    //   //.then(data => this.setState({ albums: data }));
    //   .then(data => this.setState({ outputVal: "Fetch Succeeded!" }))
    //   .catch(e => {
    //     this.setState({ outputVal: "Fetch Failed" });
    //     console.log("ERROR:", e);
    //   });

    const xhr = new XMLHttpRequest();
    const url = "http://10.180.47.117:3001/streams";

    console.log("before open", xhr);
    xhr.open("get", url, true);
    xhr.responseType = "json";
    xhr.onreadystatechange = () => {
      console.log("readystatechange", xhr);
      let status;
      //let data;
      // https://xhr.spec.whatwg.org/#dom-xmlhttprequest-readystate
      if (xhr.readyState === 4) {
        // `DONE`
        status = xhr.status;
        if (status === 200) {
          this.setState({ outputVal: "Fetch Succeeded!" });
          console.log("Success:", xhr.response);
        } else {
          this.setState({ outputVal: "Fetch Failed" });
          console.log("ERROR:", status);
        }
      }
    };
    console.log("before send", xhr);
    xhr.send();
    console.log("after send", xhr);
  }

  render() {
    const { textStyle } = styles;
    return (
      <View>
        <Text style={textStyle}>Album List!!!!</Text>
        <Text style={textStyle}>{this.state.outputVal}</Text>
      </View>
    );
  }
}

const styles = {
  textStyle: {
    color: "#000",
    fontSize: 20
  }
};

export default AlbumList;
