export default function Page() {
  return (
    <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-md">
      <img className="w-full" src="card-image.jpg" alt="Card Image" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Card Title</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          neque eu tellus varius
        </p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          Tag 1
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          Tag 2
        </span>
      </div>
    </div>
  );
}
