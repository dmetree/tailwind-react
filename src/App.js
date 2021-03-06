import React, { useState, useEffect } from 'react';
import Card from './components/Card'
import Search from './components/ImageSearch'


function App() {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');


  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setImages(data.hits);
        setIsLoading(false)
      })
      .catch(err => console.log(err));
  }, [term] );

  return (
    <div>
      <Search
      searchText={(text) => setTerm(text)}/>
      <div className="container mx-auto">
        {!isLoading && images.length === 0 && 
        <h2 className="text-6xl text-center mx-auto mt-32">Nothing found. Try something else</h2>}
        {isLoading
          ? <h2 className="text-6xl text-center mx-auto mt-32">Loading...</h2>
          : <div className="grid grid-cols-3 gap-4">
            {images.map(image => (
              <Card key={image.id} image={image} />
            ))}
          </div>}
      </div>
    </div>
    
    
  );
}

export default App;
