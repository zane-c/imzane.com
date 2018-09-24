import React from 'react';
import styles from './Welcome.scss';

function Messenger(render) {
  const m = this;
  m.init = function() {
    m.codeletters = "&#*+%?£@§$";
    m.message = 0;
    m.current_length = 0;
    m.fadeBuffer = false;
    m.messages = [
      'Welcome to imZane.com',
    ];
    setTimeout(m.animateIn, 100);
  };

  m.generateRandomString = function(length) {
    var random_text = '';
    while(random_text.length < length){
      random_text += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
    }
    return random_text;
  };

  m.animateIn = function(){
    if(m.current_length < m.messages[m.message].length){
      m.current_length = m.current_length + 2;
      if(m.current_length > m.messages[m.message].length) {
        m.current_length = m.messages[m.message].length;
      }

      var message = m.generateRandomString(m.current_length);
      render(message);

      setTimeout(m.animateIn, 60);
    } else {
      setTimeout(m.animateFadeBuffer, 60);
    }
  };

  m.animateFadeBuffer = function(){
    if(m.fadeBuffer === false){
      m.fadeBuffer = [];
      for(var i = 0; i < m.messages[m.message].length; i++){
        m.fadeBuffer.push({c: (Math.floor(Math.random()*12))+1, l: m.messages[m.message].charAt(i)});
      }
    }

    var do_cycles = false;
    var message = '';

    for(var i = 0; i < m.fadeBuffer.length; i++){
      var fader = m.fadeBuffer[i];
      if(fader.c > 0){
        do_cycles = true;
        fader.c--;
        message += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
      } else {
        message += fader.l;
      }
    }

    render(message);

    if(do_cycles === true){
      setTimeout(m.animateFadeBuffer, 50);
    } else {
      setTimeout(m.cycleText, 2000);
    }
  };

  m.init();
}

const colors = [
  '#f44336', '#e91e63', '#9c27b0',
  '#673ab7', '#3f51b5', '#2196f3',
  '#03a9f4', '#00bcd4', '#009688',
  '#4caf50', '#8bc34a', '#cddc39',
  '#ffeb3b', '#ffc107', '#ff9800',
  '#ff5722', '#795548', '#9e9e9e',
  '#607d8b',
];

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }
  componentDidMount() {
    // document.title = 'Welcome | imZane.COM';
    const c = new Messenger(m => this.setState({ message: m }));
  }
  render() {
    return (
      <div className={styles.container}>
        {this.state.message}
      </div>
    );
  }
}

export default Welcome;
