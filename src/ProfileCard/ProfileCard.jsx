import React from "react";
import "./ProfileCard.css";

const ProfileCard = () => {
  return (
    <div className="form-wrapper">
      <div className="form-card">

        <div className="image-box">
        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQArwMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAACAQADBv/EABoQAQEBAQEBAQAAAAAAAAAAAAABEQJBITH/xAAZAQEBAQEBAQAAAAAAAAAAAAACAQADBwb/xAAXEQEBAQEAAAAAAAAAAAAAAAAAARFB/9oADAMBAAIRAxEAPwD2jMzy99MzKuMlRYuNiImLhYuMmjI2Fi4yaGNjpjY2trnjHjYza54mHiWMuihWIyoi4yrEZmZWVCjJrRcaFERJCkaQpGG1JCxcXEHUxcKRZE0dDGw8bEbXPGw7ExdbXPEsdbBxS1zsF0wapSgNOwWIWWspa0KJIsiCshRpCkYbVkKRpCkG0LUk+niyFIgWjIuFOVxB0cTHTGxtbXPEx0sTG1dcsSx0wbFXXPAsdbBpQ5XKwbHSwLFOUKlOwbGJocGHGSrDiQogUpDkSHILna0hSNIcghakiyFi4gaONh42M2udiWOliWM0rlYNjrYFinK5WDY6WBShxzoV06Ck6RzqUqNU4sOBDjJThyBHSDXOlIfMGHBrnSkOQeTgudWQsSHIgWpjYWNYiaFGx0waqyufUCx06Cqcc659OlHoo6xyoWOlClKcc+hp0KTpGhwIcRq6Q4EOC50+XTlz5dOUrnThwIcFzpwoMKC50mZtZBoU6FYoNDo650jgdB0dDoo6RzodHQqukCjSoWk6RocCHFanDgQoNCusPlzh8jXOukpxzhQXOuspSucpajnYetoa2o2ENa0bVVKHS2hVKJXPo659FHWD0FLoKUdIPQUqNI4kOBFlZa6Q45ynKgV0hxzlKUXOusOVylKVAsdJS1zlWUQx01tc9bWbDtG36mjazYto2taFpHI3QVbQtWOkidOdLqhaTpEo1aNUokKDFZXSFHOFGGx0hyuUp6mBY6SlK5SlKOBjrrSucqypiY6a2hra2JhWtoWprYuLalqWjauLjWja2jauHI1CrRqnEo1ahEzMzKReMyCspMyJVNmYG1ZWYRbW1WZk1tZmYdSsxEN/BtZmOJ6NZlXo1PWZSf/Z" alt="" />
        </div>

        {/* FORM SECTION */}
        <div className="form-content">
          <h2>Registration Form</h2>

          <form>
            <div>
                <input type="text" name='name' value={formData.name} onChange={handleChange} placeholder='Name' />
                {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
            </div>

                        <div>
                <label>
                    <input type="radio" name='gender' value='male' onChange={handleChange} checked={formData.gender === 'male'} />
                    Male
                </label>

                <label>
                    <input type="radio" name='gender' value='female' onChange={handleChange} checked={formData.gender === 'female'} />
                    female

                </label>

                <label>
                    <input type="radio" name='gender' value='other' onChange={handleChange} checked={formData.gender === 'other'} />
                    other

                </label>
                {errors.gender && <p style={{ color: 'red' }}>{errors.gender}</p>}
            </div>


            <div className="form-group">
              <label>Date of Birth</label>
              <input type="date" />
            </div>

            <div>
                <input type="email" name='email' value={formData.email} onChange={handleChange} placeholder='email' />
                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            </div>


            <div className="form-group">
              <label>Mobile</label>
              <input type="text" placeholder="Enter mobile" />
            </div>

            <div className="form-group">
              <label>Customer ID</label>
              <input type="text" placeholder="Enter customer ID" />
            </div>

            <div>
                <label>
                    <input type="radio" name='gender' value='classic' onChange={handleChange} checked={formData.gender === 'classic'} />
                    classic
                </label>

                <label>
                    <input type="radio" name='gender' value='silver' onChange={handleChange} checked={formData.gender === 'silver'} />
                    silver

                </label>

                <label>
                    <input type="radio" name='gender' value='Gold' onChange={handleChange} checked={formData.gender === 'Gold'} />
                    Gold

                </label>
                {errors.gender && <p style={{ color: 'red' }}>{errors.gender}</p>}
                </div>

            <div className="btn-row">
              <button type="button" className="cancel-btn">Cancel</button>
              <button type="submit" className="save-btn">Save</button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ProfileCard;
