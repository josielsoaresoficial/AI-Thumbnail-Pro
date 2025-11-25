import Clock from "@/components/Clock";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-green-deep to-accent flex items-center justify-center p-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-glow/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-green-light/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center space-y-12 max-w-5xl w-full">
        <div className="space-y-4 animate-float">
          <h1 className="text-7xl md:text-9xl font-bold text-foreground drop-shadow-2xl animate-glow">
            Verde
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-foreground to-transparent mx-auto"></div>
        </div>
        
        <p className="text-2xl md:text-3xl text-foreground/90 font-light tracking-wide">
          Tela Verde Vibrante
        </p>

        {/* Clock */}
        <div className="flex justify-center">
          <Clock />
        </div>

        <div className="flex flex-wrap gap-4 justify-center pt-8">
          <div className="px-8 py-4 bg-foreground/10 backdrop-blur-sm border border-foreground/20 rounded-xl hover:bg-foreground/20 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            <p className="text-foreground text-lg font-medium">Design Moderno</p>
          </div>
          <div className="px-8 py-4 bg-foreground/10 backdrop-blur-sm border border-foreground/20 rounded-xl hover:bg-foreground/20 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            <p className="text-foreground text-lg font-medium">Animações Suaves</p>
          </div>
          <div className="px-8 py-4 bg-foreground/10 backdrop-blur-sm border border-foreground/20 rounded-xl hover:bg-foreground/20 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            <p className="text-foreground text-lg font-medium">100% Verde</p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="pt-12 flex justify-center gap-3">
          <div className="w-3 h-3 rounded-full bg-foreground animate-pulse"></div>
          <div className="w-3 h-3 rounded-full bg-foreground/70 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 rounded-full bg-foreground/50 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Index;
