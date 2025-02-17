import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center mt-10'> 
           <img className='mx-auto' src="https://i.ibb.co.com/VpjN7v95/logo.png" alt="" />
           <p className='mt-1'>Journalism Without Fear or Favour</p>
           <p className='mt-1'>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;