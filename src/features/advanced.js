export const advanced = (size = {}) => {
  const getSize = (size = {}) => ({
    width: size.width,
    height: size.height,

  
  });
//   const changeTransform= (Transform={}) => ({
//    rotate:Transform.transform.rotate(),
//    scale:Transform.transform.scale()
//   })
 

  return {
    ...getSize(size),
    // ...changeTransform(Transform)
   
  };
};