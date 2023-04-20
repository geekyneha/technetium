import './Invitation.css'

const { Fragment } = require("react");





export default function Invitation(props){
   
  
    
    return(
      <Fragment>
       
        <section className="Recipient">  <p>Subject : <span className='Color-red'> {props.subject} </span></p>
        <p>To :<span className='Color-red' > {props.to}</span></p>
        </section>
      
       <p>  Hi ,<span className='Color-red'> {props.name}</span></p>


       <section className="Content-matter"> <p> I am having a birthday party next Friday at my Home . Would you like to come ? It will be fun . Lots of people from my school are coming . you know some of them - <span className='Color-red'> {props.otherInvities} </span>.

  
          </p></section>
      
       <p>  My house is behind our school ,<span className='Color-red'> {props.address}.</span>  </p>
       <p>  I hope you will come and see you soon .</p>
       
       <section className="Regards"><p> from,</p>
       <p><span className='Color-red'>{props.name}</span></p>
       </section>

      </Fragment>
   
      
    );
}