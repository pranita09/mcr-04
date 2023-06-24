export const UserAvatar = (props) => {
  const { className } = props;
  const classesForImg = className + " rounded-full object-cover";
  const avatar = props?.picUrl;
  return (
    <span>
      {avatar ? (
        <img src={avatar} alt="user" className={classesForImg} />
      ) : (
        <img
          src="https://res.cloudinary.com/dxnbnviuz/image/upload/v1686487758/socialMedia/front-page-img1_ig7ywf.jpg"
          alt="demo"
          className={classesForImg}
        />
      )}
    </span>
  );
};
