import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import './PagesStyles.css';

function ContactsPage() {
    return (
        <div className="container">
            <h1>Contacts</h1>
            <div className='App-newsletter'>
                <h2>Get the latest news</h2>
                <Input type='email' placeholder='Type your email here' name='email' id='email' />
                <Button>Subscibe</Button>
            </div>
      </div>
    )
}

export default ContactsPage;