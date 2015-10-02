import React, { Component } from 'react'
import {FormInput, FormIconField, FormRow} from 'elemental';


export default class SearchBar extends Component {
 state = {
  date: Date()
 }
 // timeNow(var i) {
 //  var d = new Date(),
 //   h = (d.getHours()<10?'0':'') + d.getHours(),
 //   m = (d.getMinutes()<10?'0':'') + d.getMinutes();
 //  i.value = h + ':' + m;
 // }

 render() {

  return (
   <div style={{width:'40%'}}>
   <FormRow>
    <FormIconField width='one-third' iconPosition='left' iconKey='clock' iconFill='default'>
     <FormInput type='time' placeholder='Default' />
    </FormIconField>
    <FormIconField width='one-third' iconPosition='left' iconKey='calendar' iconFill='default'>
     <FormInput type='date' placeholder='Default' />
    </FormIconField>
    <FormIconField width='one-third' iconPosition='right' iconKey='location' iconFill='default'>
     <FormInput type='place' placeholder='Vancouver' />
    </FormIconField>
   </FormRow>
   </div>
  );
   }
}

