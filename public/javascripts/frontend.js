// Dialog windows
$(document).ready(function() {
  // Not sent
  $('.dialog-notsent').dialog({ 
    autoOpen: false,
		title: 'Verstuur factuur',
    minWidth: 490,
    modal: true
  })
  
  $('.notsent').click(function() {
    $('.dialog-notsent').dialog('open')
  });

  // Sents or overdue
  $('.dialog-sent').dialog({ 
    autoOpen: false,
		title: 'Markeer als betaald',
    minWidth: 490,
    modal: true
  })
  
  $('.sent').click(function() {
    $('.dialog-sent').dialog('open')
  });
  $('.overdue').click(function() {
    $('.dialog-sent').dialog('open')
  });
  
  // Dialog with form error
  $('.dialog-error').dialog({ 
    autoOpen: false,
		title: 'Markeer als betaald',
    minWidth: 490,
    modal: true
  })
  
  $('.open-dialog-error').click(function() {
    $('.dialog-error').dialog('open')
  });
  
  // Dialog with form notice
  $('.dialog-notice').dialog({ 
    autoOpen: false,
		title: 'Markeer als betaald',
    minWidth: 490,
    modal: true
  })
  
  $('.open-dialog-notice').click(function() {
    $('.dialog-notice').dialog('open')
  });
  
  // Tooltips
  $('a.tooltip[title]').qtip({
     position: {
        corner: {
           target: 'topRight',
           tooltip: 'topLeft'
        }
     },
     style: {
        name: 'cream',
        padding: '7px 13px',
        width: {
           max: 210,
           min: 0
        },
        tip: true
     }
  });
  
  // Datepicker
  $('.datepicker').datepicker()
  
});