const mockUrls = [
  "https://utfs.io/f/e88de471-03b5-4005-8801-a88a829b8b35-jlo1ag.jpeg",
  "https://utfs.io/f/35b082af-332e-4b2c-9856-1ed2ad74bd91-3ao772.jpeg",
  "https://utfs.io/f/2c904956-7652-406f-b46b-6285e89c75e0-q7cm9h.webp"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function Home() {
  return (
    <main className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="relative aspect-square overflow-hidden rounded-lg">
            <img
              src={image.url}
              alt={`Imagem ${image.id}`}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
