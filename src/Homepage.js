import imagelogo from './assets/logo.webp';

function Homepage() {
    return (
        <div>
        <h1>Welcome to the Little Lemon site</h1>
        <h1>Task: Add an image below</h1>
      <img
        height={200}
        src={imagelogo}
        alt='An imagen of logo'
      />
      <img
        height={300}
        src={require('./assets/logo.webp')}
        alt='An imagen of logo'
      />
      </div>
    );
}

export default Homepage
