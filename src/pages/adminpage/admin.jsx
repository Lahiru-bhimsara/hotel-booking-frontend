import { Link, Route, Routes } from "react-router-dom";
import { CiBookmarkCheck } from "react-icons/ci";
import {
  MdOutlineCategory,
  MdOutlineRoom,
  MdOutlineFeedback,
} from "react-icons/md";
import { FiUsers, FiImage } from "react-icons/fi";
import AdminBooking from "../admin/Bookings/adminBooking";
import AdminCategories from "../admin/categories/adminCategories";
import AdminRooms from "../admin/rooms/rooms";
import AdminUsers from "../admin/users/users";
import AdminFeedback from "../admin/feedback/feedback";
import AdminGalleryItems from "../admin/galleryItems/galleryItems";
import AddCategoryForm from "../admin/AddCategoryForm/addCategoryForm";
import UpdateCategoryForm from "../admin/UpdateCategoryForm/updateCategory";
import AddGalleryItemForm from "../admin/AddGalleryForm/addGalleryForm";
import UpdateGalleryItemForm from "../admin/UpdateGalleryForm/updateGalleryForm";

export default function AdminPage() {
  return (
    <div className="w-full max-h-[100vh] flex">
      <div className="w-[20%] bg-pink-500 h-[100vh] flex flex-col shadow-lg border-r-2 border-pink-600 p-[30px]">
        <div className="text-white text-[30px] hover:font-bold flex justify-start items-center px-4 py-2 transition duration-200 ease-in-out hover:shadow-lg hover:bg-pink-400">
          <Link to="/admin/bookings" className="flex items-center gap-3">
            <CiBookmarkCheck />
            Bookings
          </Link>
        </div>

        <div className="text-white text-[30px] hover:font-bold flex justify-start items-center px-4 py-2 transition duration-200 ease-in-out hover:shadow-lg hover:bg-pink-400">
          <Link to="/admin/categories" className="flex items-center gap-3">
            <MdOutlineCategory />
            Categories
          </Link>
        </div>

        <div className="text-white text-[30px] hover:font-bold flex justify-start items-center px-4 py-2 transition duration-200 ease-in-out hover:shadow-lg hover:bg-pink-400">
          <Link to="/admin/rooms" className="flex items-center gap-3">
            <MdOutlineRoom />
            Rooms
          </Link>
        </div>

        <div className="text-white text-[30px] hover:font-bold flex justify-start items-center px-4 py-2 transition duration-200 ease-in-out hover:shadow-lg hover:bg-pink-400">
          <Link to="/admin/users" className="flex items-center gap-3">
            <FiUsers />
            Users
          </Link>
        </div>

        <div className="text-white text-[30px] hover:font-bold flex justify-start items-center px-4 py-2 transition duration-200 ease-in-out hover:shadow-lg hover:bg-pink-400">
          <Link to="/admin/feedback" className="flex items-center gap-3">
            <MdOutlineFeedback />
            Feedback
          </Link>
        </div>

        <div className="text-white text-[30px] hover:font-bold flex justify-start items-center px-4 py-2 transition duration-200 ease-in-out hover:shadow-lg hover:bg-pink-400">
          <Link to="/admin/gallery-items" className="flex items-center gap-3">
            <FiImage />
            Gallery Items
          </Link>
        </div>
      </div>

      <div className="w-[80%] max-h-[100vh] overflow-y-scroll bg-pink-200 p-4 shadow-lg border-l-2 border-pink-600 hover:shadow-2xl transition-shadow duration-200 ease-in-out">
        <Routes path="/*">
          <Route path="/bookings" element={<AdminBooking />} />
          <Route path="/categories" element={<AdminCategories />} />
          <Route path="/add-category" element={<AddCategoryForm />} />
          <Route path="/update-category" element={<UpdateCategoryForm />} />
          <Route path="/rooms" element={<AdminRooms />} />
          <Route path="/users" element={<AdminUsers />} />
          <Route path="/feedback" element={<AdminFeedback />} />
          <Route path="/gallery-items" element={<AdminGalleryItems />} />
          <Route path="/add-gallery-item" element={<AddGalleryItemForm />} />
          <Route
            path="/update-gallery-item"
            element={<UpdateGalleryItemForm />}
          />
        </Routes>
      </div>
    </div>
  );
}
