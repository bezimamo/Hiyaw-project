import { Card, CardContent } from "@/components/ui/card"

export function ServiceOverview() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Comprehensive Technology Solutions</h2>
        <Card>
          <CardContent className="p-8">
            <p className="text-lg text-center text-muted-foreground">
              We specialize in delivering transformative solutions that integrate seamlessly into your business processes. From web development and software engineering to AI-driven strategies, we&apos;re here to help you scale.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}