import UserTag from "../userData/userdata.jsx";

function Header() {
  return (
    <header className="w-full bg-pink-400 flex h-[100px] relative items-center p-[10px]">
      <h1 className="text-white text [30px] text-2xl">
        Hotel Managment System
      </h1>

      <UserTag
        imageLink="https://img.freepik.com/premium-photo/man-with-beard-blue-circle-with-white-background_1057389-84761.jpg?semt=ais_hybrid"
        name="DDDD Dddd"
      />
    </header>
  );
}

export default Header;
