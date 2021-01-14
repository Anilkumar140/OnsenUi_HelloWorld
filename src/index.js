import React from "react";
import { render } from "react-dom";
import * as myApp from 'demopackge';
import ons from "onsenui";
import {
  Splitter,
  SplitterSide,
  SplitterContent,
  Page,
  Toolbar,
  ToolbarButton,
  Icon,
  button
} from "react-onsenui";


class MyPage extends React.Component {
  state = { isOpen: false };
  state1={msg:"hi"};
 
  hide=()=> {
    this.setState({ isOpen: false });
  }
  show = () => {
    
      var mg=myApp.printMsg();
         console.log(mg); 
         this.state1=mg; 
         ons.notification.alert(mg);
  }
  
  renderToolbar() {
    
    return (
      <ons-toolbar>
        <div className="center">Demo App ..!</div>
        <div className="right">
          <ToolbarButton onClick={this.show}> 
            <Icon icon="ion-navicon, material:md-menu" />
          </ToolbarButton>
     
         
        </div>
      </ons-toolbar>
    );
  }
  render() {
    return (
      <ons-splitter>
        <SplitterSide
          style={{
            boxShadow:
              "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"
          }}
          side="left"
          width={200}
          collapse={true}
          swipeable={true}
          isOpen={this.state.isOpen}
          onClose={this.hide}
          onOpen={this.show}
        >
          <Page />
        </SplitterSide>
        
        <ons-splitter-content>
          <Page renderToolbar={this.renderToolbar}>
            
            <section style={{ margin: "16px" }}>
              <p>Swipe right to open the menu.</p>
            </section>
          </Page>
        </ons-splitter-content>
        </ons-splitter>

    );
  }
}

render(<MyPage />, document.getElementById("root"));
