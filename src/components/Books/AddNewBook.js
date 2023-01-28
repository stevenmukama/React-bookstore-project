import Card from '../cardDesign/Card';

function AddNewBook() {
  return (
    <Card>
      <h1>Add New Book</h1>
      <form>
        <div>
          <input type="text" placeholder="Book Title" />
        </div>
        <div>
          <input type="text" placeholder="Author" />
        </div>
        <div>
          <select>
            <option value="Action">Action</option>
            <option value="Romance">Romance</option>
            <option value="Science Fiction">Science Fiction</option>
          </select>
        </div>
        <div>
          <button type="button">Add Book</button>
        </div>
      </form>
    </Card>
  );
}

export default AddNewBook;
