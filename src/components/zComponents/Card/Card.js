import React, {Component} from 'react';
import Radium from 'radium';


export default class PracticeList extends Component {
  render () {
    var practiceCardNodes = data.practice.map(function (practice)) {
    return (
      <PracticeCard  
      <
    );
  }

}
@Radium
class PracticeCard extends Component {
  getInitialState() {
    return {data: []}
  },
  render() {
    const cardStyles = {
      card: {
        background: '#FFFFFF',
        borderRadius: '10px',
        float: 'left',
        height: '300px',
        marginTop: '6em',
        marginLeft: '2em',
        marginRight: '2em',
        marginBottom: '2em',
        position: 'relative',
        width: '500px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        ':hover': {
          boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
          },
        },
    };
    return (
      <div style={{height: '500px', length:'500px', position:'relative'}}>
        <div key='one' style={cardStyles.card}>
          <PracticeCardHeader practiceName={this.props.practice.Name} practiceAddress={this.props.practice.Address} />
          <PractitionerCardList data={data}/>
          </div>
        </div>
      </div>
    );
  } 
}
@Radium
class PractitionerCardList extends Component {
    render() {
      var practitionerCardNodes = this.props.data.map(function (card) {
        return (
          <CardHeader name={card.author}>

          </CardHeader>
        );
      });
      return (
        <div className="commentList">
          {commentNodes}
        </div>
      );
@Radium
class PractitionerCard extends Component {
  render() {
    const childCardStyle = {
      card: {
        background: '#FFFFFF',
        borderRadius: '10px',
        float: 'left',
        height: '150px',
        margin: '1rem',
        position: 'relative',
        width: '480px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        ':hover': {
          boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
          },
        },
        avatar: {
          borderRadius: '10px',
          float: 'left',
          height: '40px',
          width: '40px',
          float: 'center',
          position: 'relative',
        },
        name: {
          fontStyle: 'Roboto',
          name: {
            te
          }
        }
    }
    return (
      <div style={{this.childCardStyle.card}}>
        </div>
      </div>

    );
  }
}
// <div style={{this.childCardStyle.avatar}}>
//         <img src={this.props.practitioner.image} alt="Practitioner Image" width="35px", height="35px">

@Radium
class CardHeader extends Component {
  render() {
    return (

    );
  }
}

const practices = {
  'practice': [
      {
    'Name': 'West Fourth Dental',
    'Address': '2339 4th Avenue',
    'City': 'Vancouver',
    'Provice': 'BC',
    'PostalCode': 'V1X 8B5',
    'Services': [
     'Dental Emergency',
     'General Consult',
     'Cosmetic Surgery'
     ],
    'Practitioners': [
    {
     'FirstName': 'Jack',
     'LastName': 'Carter',
     'DateOfBirth': '1980-02-22T18:25:43.511Z',
     'Specialization': 'Surgery',
     'Education': 'MD',
     'Address': '7913 West 9th Ave',
     'City': 'Hope',
     'Province': 'BC',
     'PostalCode': 'V1X 8B5',
     'Country': 'Canada',
     'Availability': [
      {
       'Sun Sep 27 2015': [
        '12:30PM',
        '2:00PM',
        '5:00PM'
       ]
      },
      {
       'Mon Sep 28 2015': [
        '1:30PM, 4:00PM'
       ]
      }
     ]
    },
    {
     'FirstName': 'Amir',
     'LastName': 'Hayeri',
     'DateOfBirth': '1980-02-22T18:25:43.511Z',
     'Specialization': 'Cosmetic',
     'Education': 'MD',
     'Address': '7913 West 9th Ave',
     'City': 'Hope',
     'Province': 'BC',
     'PostalCode': 'V1X 8B5',
     'Country': 'Canada',
     'Availability': [
      {
       'Sun Sep 27 2015': [
        '12:30PM',
        '2:00PM',
        '5:00PM'
       ]
      },
      {
       'Mon Sep 28 2015': [
        '1:30PM, 4:00PM'
       ]
      }
     ]
    }
   ]
  },
  {
   'Name': 'Arbutus North Dental',
   'Address': '3412 5th Avenue',
   'City': 'Vancouver',
   'Provice': 'BC',
   'PostalCode': 'V4S4F5',
   'Services': [
    'Dental Emergency',
    'General Consult',
    'Cosmetic Surgery'
   ],
   'Practitioners': [
    {
     'FirstName': 'John',
     'LastName': 'Kimble',
     'DateOfBirth': '1955-04-12T18:25:43.511Z',
     'Specialization': 'General Consult',
     'Education': 'MD',
     'Address': '3412 5th Avenue',
     'City': 'Hope',
     'Province': 'BC',
     'PostalCode': 'V1X 8B5',
     'Country': 'Canada',
     'Availability': [
      {
       'Sun Sep 27 2015': [
        '12:30PM',
        '2:00PM',
        '5:00PM'
       ]
      },
      {
       'Mon Sep 28 2015': [
        '1:30PM, 4:00PM'
       ]
      }
     ]
    },
    {
     'FirstName': 'Gordon',
     'LastName': 'Katic',
     'DateOfBirth': '1962-12-22T18:25:43.511Z',
     'Specialization': 'Surgery',
     'Education': 'MD',
     'Address': '3412 5th Avenue',
     'City': 'Hope',
     'Province': 'BC',
     'PostalCode': 'V1X 8B5',
     'Availability': [
      {
       'Sun Sep 27 2015': [
        '12:30PM',
        '2:00PM',
        '5:00PM'
       ]
      },
      {
       'Mon Sep 28 2015': [
        '1:30PM, 4:00PM'
       ]
      }
     ]
    }
   ]
  }
 ]
}