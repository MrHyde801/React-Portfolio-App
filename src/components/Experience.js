import React, { useState } from 'react';

const Experience = () => {

  const [exp] = useState([
    {
      employer: "Utah Valley Lacrosse Club, Assistant Coach/ Assistant Director of Operations",
      date: "Fall 2023 - Present",
      expList: [
        "Assigned to film practices and Home games. Edit, breakdown, and upload film to our database so our team can study film and prepare each week for upcoming games",
        "Since I am not assigned to a specific role, I was required to learn all on-field coaching roles and strategies. Because when a coach or coordinator is out for a practice or a game. I can plug in and coach with the same authority and effectiveness",
        "I work player development on an individual basis. I get the opportunity to share my experience as a player to help them with their individual struggles with injuries, mental blocks, or poor performance",
        "Work closely with the Director of Operations on projects, stat recording, and operating procedures for the administration of the team"
      ] 
    } , 
    {
      employer: "Sunrun Solar, Homebuilder CAD Designer",
      date: "June 2020 - Present",
      expList: [
        "Use AutoCAD and multiple design applications to calculate solar efficiency and design Solar arrays",
        "Communicate with my supervisor to meet each California Development design needs",
        "Train new Employees on different design processes and team culture",
        "Be adaptable and available to work on special projects in a timely and efficient manner",
        "Show great technical abiltiy to design according to county guidelines and accurately input customer and solar information into each design"
      ] 
    } ,
    {
      employer: "Vivint Solar, CAD Technician",
      date: "June 2015 - May 2018",
      expList: [
        "Use AUTOCAD to quickly and efficently design solar panels on houses.",
        "Communicate with sales representatives to create the most optimum design to fit the customers' electrical and personal needs.",
        "Train new employees in all design processes and applications to swiftly become valuable designers",
        "Adapt and implement new design processes and ever-changing requirements of the specific count and office requirements",
        "Communicate and work well with supervisors and team leads to create accurate designs"
      ] 
    } , 
    {
      employer: "The Italian Place, Shift Supervisor/Cook",
      date: "Sep 2013 - Sep 2016",
      expList: [
        "Correctly receive orders, process payments, prepare food and respond appropriately to guests and their concerns.",
        "Diligent in meting customer needs and effectively resolving food or service issues.",
        "Work well with other employees, and openly invite instruction from the management team",
        "Closely follow standard procedures for safe food preparation, assembly and presentation to ensure customer satisfaction",
        "Execute additional responsisbilies of opening and closing restaurant"
      ]  
    } , 
    {
      employer: "Deer Creek State Park, Assistant Park Ranger",
      date: "May 2013 - Sep 2013",
      expList: [
        "Greet visitors and operate entry transactions",
        "Manage a wide variety of customer service and administrative tasks to resolve visitor issues quickly and efficiently",
        "Exercise sound judgement when enforcing park policies with uncooperative visitors"
      ] 
    } ,
    {
    employer: "Provo High School, Assistant Lacrosse Coach",
      date: "Sep 2020 - May 2021",
      expList: [
        "Create and lead drills during practice",
        "Teach offensive and defensive strategies to team",
        "Assess and monitor each player's skills and assist with improvement",
        "Develop a healthy rapport with student athlets and parents",
        "Lead by example both on and off the field"
      ] 
    },  
    { 
    employer: "Timpanogas High School, Junior Varsity Lacrosse Coach",
      date: "Sep 2013 - May 2014",
      expList: [
        "Help implement and instruct drills during practices",
        "Be the main voice of instruction and coaching during JV games",
        "Continual training and instruction to help feed these players into the Varsity team",
        "Encourage and support all players to increase moral and confidence among the team",
        "Work alongside Varsity coaches for personal instruction with any player and strategy for Varsity games"
      ] 
    }
  ])

  return (
    <div className='container-fluid'>
          <div className='row sectionHead'>
            <h2>Work Experience</h2>
            <div className='underline'></div>
          </div>
      {exp.map(data => {
        return (
        <>
          <div className='row employer'>
            <h5>{data.employer}</h5>
          </div>
          <div className="row date px-3">
            {data.date}
          </div>
          <ul className='row expList px-5'>
            {data.expList.map(item => {
              return (
                <li key={item} >{item}</li>
              )
            })}
          </ul>
        </>
        )
      })}
    </div>
  );
};

export default Experience;

