import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-[#1A1F2C] via-[#2D3B5F] to-[#1A1F2C]">
      <div className="w-full max-w-6xl animate-fade-in">
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4 tracking-wide">
            Новогодняя открытка
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-sans">
            Традиции народа коми
          </p>
        </div>

        <Card className="overflow-hidden aurora-glow bg-card/95 backdrop-blur border-primary/30">
          <div className="relative">
            <img
              src="https://cdn.poehali.dev/projects/82d5e1c6-26bc-447c-a862-e7d4924b97af/files/da174677-0313-43b2-824a-07027d61086a.jpg"
              alt="Новогодняя открытка в стиле коми-культуры с Кöдзыд Пöлем, Лымныв и северным сиянием"
              className="w-full h-auto"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F2C]/60 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute top-4 left-4 right-4 md:top-6 md:left-6 md:right-6">
              <div className="inline-block bg-accent/90 backdrop-blur-sm px-4 py-2 rounded-lg animate-glow">
                <p className="text-sm md:text-base font-serif font-semibold text-accent-foreground">
                  С Новым Годом!
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8 bg-gradient-to-b from-card to-card/80">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="text-2xl">❄️</div>
                <div>
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-1">
                    Кöдзыд Пöль и Лымныв
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Коми Дед Мороз в традиционной малице с родовыми орнаментами 
                    и Снежная Девочка в льняном платье с вышивкой приносят тепло 
                    и радость в северный зимний лес.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-2xl">✨</div>
                <div>
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-1">
                    Северное сияние
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Над горами Тельпосиз танцует полярное сияние, озаряя 
                    заснеженные ели и традиционный коми чум зелёными 
                    и фиолетовыми переливами.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-2xl">🎨</div>
                <div>
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-1">
                    Культурные символы
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Геометрические орнаменты с лосиными рогами и ёлочными ветками, 
                    резной посох с соколом, деревянные фигурки — всё хранит мудрость 
                    древних коми традиций.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border/50">
              <p className="text-center text-sm text-muted-foreground font-serif italic">
                Пусть северное сияние принесёт свет и тепло в ваш дом
              </p>
            </div>
          </div>
        </Card>

        <div className="mt-6 text-center">
          <p className="text-sm text-white/60">
            Создано с вдохновением от северной природы и культуры народа коми
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;