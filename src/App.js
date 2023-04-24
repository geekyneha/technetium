import './App.css';
import ProfileCard from './ProfileCard';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ProfileCard  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEm9o7VcwIp4boMGk8Fqjql_gwciUQzzaJ-Q&usqp=CAU" designation="UI / UX  DESIGNER"  name="Aryan Shirani" jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque iaculis leo ultricies accumsan. Fusce consequat ante vitae"  see-more-btn="See more..."/>
      <ProfileCard  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1N5foCzekwyzh27oRiWnpX1SCxljj1DCgMw&usqp=CAU" designation="Freelancer / Developer "  name="Michele Nile" jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque iaculis leo ultricies accumsan. Fusce consequat ante vitae"  see-more-btn="See more..."/>
      <ProfileCard  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTknTV4TOO96F4g9GQmy712gdI4W-1dAhitIw&usqp=CAU" designation= "Software Engineer"  name="Carli Mini" jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque iaculis leo ultricies accumsan. Fusce consequat ante vitae"  see-more-btn="See more..."/>
      </header>
    </div>
  );
}

export default App;
