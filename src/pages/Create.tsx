import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Loader2 } from "lucide-react";

export default function Create() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [creativity, setCreativity] = useState([50]);
  const [variations, setVariations] = useState("3");

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simular geração
    setTimeout(() => setIsGenerating(false), 3000);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-creative bg-clip-text text-transparent">
          Gerar Thumbnail com IA
        </h1>
        <p className="text-muted-foreground text-lg">
          Crie thumbnails profissionais usando inteligência artificial
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Configuração */}
        <Card className="border-border/40 shadow-soft">
          <CardHeader>
            <CardTitle>Configuração</CardTitle>
            <CardDescription>
              Descreva o que você precisa e personalize o resultado
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Título do Vídeo/Conteúdo *</Label>
              <Input
                id="title"
                placeholder="Ex: Como criar thumbnails incríveis"
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Descrição/Conteúdo Principal</Label>
              <Textarea
                id="description"
                placeholder="Descreva brevemente sobre o que é seu conteúdo..."
                className="bg-background min-h-24"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="style">Estilo Preferido</Label>
              <Select defaultValue="professional">
                <SelectTrigger id="style">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="minimal">Minimalista</SelectItem>
                  <SelectItem value="bold">Chamativo</SelectItem>
                  <SelectItem value="professional">Profissional</SelectItem>
                  <SelectItem value="gaming">Gaming</SelectItem>
                  <SelectItem value="modern">Moderno</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="colors">Paleta de Cores</Label>
              <Select defaultValue="vibrant">
                <SelectTrigger id="colors">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vibrant">Vibrante</SelectItem>
                  <SelectItem value="pastel">Pastel</SelectItem>
                  <SelectItem value="dark">Escuro</SelectItem>
                  <SelectItem value="neon">Neon</SelectItem>
                  <SelectItem value="natural">Natural</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label>Criatividade da IA</Label>
              <div className="flex items-center gap-4">
                <span className="text-xs text-muted-foreground">Conservador</span>
                <Slider
                  value={creativity}
                  onValueChange={setCreativity}
                  max={100}
                  step={1}
                  className="flex-1"
                />
                <span className="text-xs text-muted-foreground">Criativo</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Nível atual: {creativity[0]}%
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="variations">Número de Variações</Label>
              <Select value={variations} onValueChange={setVariations}>
                <SelectTrigger id="variations">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3">3 variações</SelectItem>
                  <SelectItem value="5">5 variações</SelectItem>
                  <SelectItem value="10">10 variações</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label>Opções Adicionais</Label>
              <div className="flex items-center space-x-2">
                <Checkbox id="text" defaultChecked />
                <label
                  htmlFor="text"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Incluir texto automático
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="graphics" defaultChecked />
                <label
                  htmlFor="graphics"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Incluir elementos gráficos
                </label>
              </div>
            </div>

            <Button 
              onClick={handleGenerate} 
              disabled={isGenerating}
              className="w-full gap-2 shadow-medium hover:shadow-strong transition-all"
              size="lg"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Gerando...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Gerar Thumbnails com IA
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Pré-visualização */}
        <Card className="border-border/40 shadow-soft">
          <CardHeader>
            <CardTitle>Pré-visualização</CardTitle>
            <CardDescription>
              Suas thumbnails aparecerão aqui
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-gradient-to-br from-muted to-secondary rounded-lg flex items-center justify-center border border-border/40">
              {isGenerating ? (
                <div className="text-center space-y-4">
                  <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto" />
                  <p className="text-muted-foreground">Gerando suas thumbnails...</p>
                </div>
              ) : (
                <div className="text-center space-y-2 p-8">
                  <Sparkles className="w-12 h-12 text-muted-foreground/50 mx-auto" />
                  <p className="text-muted-foreground">
                    Configure as opções e clique em "Gerar" para criar suas thumbnails
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
