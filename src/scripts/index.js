import '../styles/index.css';
import 'vanderlee-colorpicker/jquery.colorpicker.css';
 
cssVars({
 
  variables: {
      '--main-background-color': 'black',
      '--secondary-background-color': 'green'
  },
  // updateDOM: true

});

$(function() {  
  $('#main-bg-color-input').colorpicker({
    ok: function(event, color) {
      cssVars({
        variables: {
            '--main-background-color': "#" + color.formatted
        }
    });
    }
  });
});

$(function() {  
  $('#secondary-bg-color-input').colorpicker({
    ok: function(event, color) {
      cssVars({
        variables: {
            '--secondary-background-color': "#" + color.formatted
        }
    });
    }
  });
});

const customFont = document.querySelector("#custom-font");

customFont.addEventListener('change',  function(e) {
    cssVars({
        variables: {
            '--first-font': `${this.value}`
        }
    });
  });


 
 
  