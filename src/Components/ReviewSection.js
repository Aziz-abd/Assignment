function ReviewSection(params) {
  return (
    <div className="mt-12">
      <h1 className="text-3xl font-semibold">Reviews</h1>
      <div className="mt-4">
        <div className="flex flex-row">
          {" "}
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>

        <div className="mt-2">5.0 • (14)</div>
      </div>
      <div className="mt-8">
        <Comments />
      </div>
      <button className="border rounded-md p-2 mt-4 text-[#222727] font-semibold px-4 text-lg">See all</button>
    </div>
  );
}
function Star(porps) {
  return (
    <div className="w-8 mr-1">
      <svg
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="m21.975 9.974-4.225 3.69 1.266 5.495a1.502 1.502 0 0 1-1.395 1.84 1.499 1.499 0 0 1-.839-.214l-4.788-2.907-4.778 2.907a1.499 1.499 0 0 1-2.234-1.626l1.264-5.489L2.02 9.974a1.5 1.5 0 0 1 .853-2.63l5.571-.484 2.175-5.19a1.495 1.495 0 0 1 2.758 0l2.18 5.19 5.57.483a1.498 1.498 0 0 1 1.318 1.899 1.5 1.5 0 0 1-.465.732h-.005Z"></path>
      </svg>
    </div>
  );
}
function Star2(porps) {
  return (
    <div className="w-4 mr-0.6">
      <svg
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="m21.975 9.974-4.225 3.69 1.266 5.495a1.502 1.502 0 0 1-1.395 1.84 1.499 1.499 0 0 1-.839-.214l-4.788-2.907-4.778 2.907a1.499 1.499 0 0 1-2.234-1.626l1.264-5.489L2.02 9.974a1.5 1.5 0 0 1 .853-2.63l5.571-.484 2.175-5.19a1.495 1.495 0 0 1 2.758 0l2.18 5.19 5.57.483a1.498 1.498 0 0 1 1.318 1.899 1.5 1.5 0 0 1-.465.732h-.005Z"></path>
      </svg>
    </div>
  );
}
function Comments(params) {
  const comments = [
    {
      id: 1,
      name: "Aziz Abd",
      date: "5 Aug 2023 1:59pm",
      comment:
        "Amazing experience! Olga made sure that I am aware of every step of the procedure and explained what asdasd vasdasd acsdw asd",
    },
    {
      id: 2,
      name: "Aziz Abd",
      date: "5 Aug 2023 1:59pm",
      comment:
        "Amazing experience! Olga made sure that I am aware of every step of the procedure and explained what asdasd vasdasd acsdw asd",
    },
    {
      id: 3,
      name: "Aziz Abd",
      date: "5 Aug 2023 1:59pm",
      comment:
        "Amazing experience! Olga made sure that I am aware of every step of the procedure and explained what asdasd vasdasd acsdw asd",
    },
    {
      id: 4,
      name: "Aziz Abd",
      date: "5 Aug 2023 1:59pm",
      comment:
        "Amazing experience! Olga made sure that I am aware of every step of the procedure and explained what asdasd vasdasd acsdw asd",
    },
    {
      id: 5,
      name: "Aziz Abd",
      date: "5 Aug 2023 1:59pm",
      comment:
        "Amazing experience! Olga made sure that I am aware of every step of the procedure and explained what asdasd vasdasd acsdw asd",
    },
    {
      id: 6,
      name: "Aziz Abd",
      date: "5 Aug 2023 1:59pm",
      comment:
        "Amazing experience! Olga made sure that I am aware of every step of the procedure and explained what asdasd vasdasd acsdw asd",
    },
  ];

  return (
    <div className="grid grid-cols-2  gap-6 gap-x-16">
      {comments.map((comment, index) => {
        return (
          <div>
            <div className="flex flex-row items-center">
              <div className=" py-4 px-6 rounded-full bg-indigo-200 text-lg text-indigo-600 font-semibold tex">
                {comment.name.charAt(0)}
              </div>
              <div className="ml-2">
                <h1>{comment.name}</h1>
                <div className="-mt-0.5 text-xs font-semibold text-gray-400">
                  {comment.date}
                </div>
              </div>
            </div>
            <div className="flex flex-row mt-2">
              <Star2 />
              <Star2 />
              <Star2 />
              <Star2 />
              <Star2 />
            </div>
            <div className="h-12 w-50 text-ellipsis overflow-auto">
              <p className="truncate">{comment.comment}</p>
            </div>
            <a href="asd" className="text-lg text-indigo-600 mt-2">
              Read more
            </a>
          </div>
        );
      })}
    </div>
  );
}
export default ReviewSection;
