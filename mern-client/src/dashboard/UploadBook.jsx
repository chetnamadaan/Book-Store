import React, { useState } from 'react';
import { Button, Label, TextInput, Select, Textarea } from 'flowbite-react'; 


const UploadBook = () => {

    const categories = [
    'Fiction',
    'Science Fiction',
    'Non-fiction',
    'Science',
    'Technology',
    'History',
    'Fantasy',
    'Biography',
    'Mystery',
    'Horror',
    'Self-help',
    'Memoir', 
    'Travel',
    'Religion',
  ];

  const [category, setCategory] = useState('');
  const [bookDescription, setBookDescription] = useState('');
  const [bookPdfUrl, setBookPdfUrl] = useState('');
  const [bookTitle, setBookTitle] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isUploaded, setIsUploaded] = useState(false); 
  

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setBookDescription(e.target.value);
  };

  const handlePdfUrlChange = (e) => {
    setBookPdfUrl(e.target.value);
  };

  const handleTitleChange = (e) => {
    setBookTitle(e.target.value);
  };

  const handleAuthorNameChange = (e) => {
    setAuthorName(e.target.value);
  };

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookData = {
      bookTitle,
      authorName,
      imageUrl,
      category,
      bookDescription,
      bookPdfUrl,
    };


    fetch("http://localhost:5000/upload-book", {
      method: "POST",
      headers: {
          "Content-type": "application/json",
      },
      body: JSON.stringify(bookData),
    })
    .then(res => res.json())
    .then(data => {

        alert("Book uploaded successfully!!!");
    })
    .catch(err => {

        console.error("Error uploading book:", err);
        alert("Failed to upload book. Please try again.");
    });
    form.reset();


    setIsUploaded(true);


    setBookTitle('');
    setAuthorName('');
    setImageUrl('');
    setCategory('');
    setBookDescription('');
    setBookPdfUrl('');
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Upload A Book</h2>
      <form className="flex lg:w-[1180px] flex-col flex-wrap gap-4" onSubmit={handleSubmit}>
        <div className="flex gap-8">

          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              name="bookTitle"
              value={bookTitle}
              onChange={handleTitleChange}
              placeholder="Enter the Book Name"
              required
              type="text"
            />
          </div>


          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              name="authorName"
              value={authorName}
              onChange={handleAuthorNameChange}
              placeholder="Enter the Author Name"
              required
              type="text"
            />
          </div>
        </div>

        <div className="flex gap-8">

          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageUrl" value="Book Image URL" />
            </div>
            <TextInput
              id="imageUrl"
              name="imageUrl"
              value={imageUrl}
              onChange={handleImageUrlChange}
              placeholder="Enter the Image URL"
              required
              type="url"
            />
          </div>


          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="category" value="Category" />
            </div>
            <Select
              id="category"
              name="category"
              value={category}
              onChange={handleCategoryChange}
              required
            >
              <option value="">Select Book Category</option>
              {categories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </Select>
          </div>
        </div>

        <div className="flex gap-8">

          <div className="lg:w-full">
            <div className="mb-2 block">
              <Label htmlFor="bookDescription" value="Book Description" />
            </div>
            <Textarea
              id="bookDescription"
              name="bookDescription"
              value={bookDescription}
              onChange={handleDescriptionChange}
              placeholder="Enter a short description of the book"
              required
              rows={4}
            />
          </div>
        </div>


        <div className="flex gap-8 mt-4">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookPdfUrl" value="Book PDF URL" />
            </div>
            <TextInput
              id="bookPdfUrl"
              name="bookPdfUrl"
              value={bookPdfUrl}
              onChange={handlePdfUrlChange}
              placeholder="Enter the PDF URL"
              required
              type="url"
            />
          </div>
        </div>

        <div className="mt-4">

          <Button 
            type="submit" 
            className="bg-blue-500 text-white hover:bg-blue-600" 
            style={{ width: '100%' }}
          >
            Upload Book
          </Button>
        </div>
      </form>


      {isUploaded && (
        <div className="mt-4 text-green-500 text-lg font-bold">
          Your book has been successfully uploaded!
        </div>
      )}
    </div>
  );
};

export default UploadBook;
