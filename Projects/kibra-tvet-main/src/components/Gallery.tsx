export const Gallery = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Gallery
          </h2>
          <p className="text-muted-foreground text-lg">Watch our documentaries</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="aspect-video bg-secondary rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/lMeZT7PAObQ"
              title="Kibra Technical and Vocational College, Nairobi"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="text-center mt-6">
            <h3 className="text-xl font-semibold text-foreground">
              President Visit at Kibra
            </h3>
            <p className="text-muted-foreground mt-2">
              State House Kenya • 76.6K subscribers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
