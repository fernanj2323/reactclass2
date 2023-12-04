import React from "react";

class Hello extends React.Component {
    constructor(props){
        super(props);
        console.log('[1]')

        this.state = { hello: "World!", 
                        count: props.count};
    }

    componentDidMount(){

        console.log('[2]')
    }
    

    render() {
        return (
          <>
              <h1> Hello </h1> {this.state.hello}

              <br></br>
                    count = {this.state.count}
          </>
        )
    }



    shouldComponentUpdate(nextProps, nextState) {
        console.log('[4]')
        return true;
    }


    componentDidUpdate(prevProps) {

        console.log('[5]');


        if (prevProps.count !== this.props.count) {
            // Actualizar el estado con el nuevo valor de count
            this.setState({ count: this.props.count });
            console.log("Updated count in state");
          }
          
          
          console.log("componentDidUpdate()");
          console.log('[5]');
    }



    componentWillUnmount() {
        console.log("componentWillUnmount()");
        console.log('[6]')
    }

}



export default Hello