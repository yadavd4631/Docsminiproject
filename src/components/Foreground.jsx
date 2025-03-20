
import { useRef } from 'react';
import Card from './Card'

const Foreground = () => {

 const ref = useRef(null)
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue" },
    },
  ];

  return (
    <div>
      <div ref={ref} className=" fixed top-3  left-0 z-[3] w-full h-full flex gap-5 p-10 flex-wrap">
        {data.map((item, index) => (
          <Card key={index}  data={item} reference={ref} />
        ))}
      </div>
    </div>
  );
}

export default Foreground