import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

interface InitiativeCardProps {
  title: string
  description: string
  buttonText: string
  buttonHref: string
}

export default function InitiativeCard({ title, description, buttonText, buttonHref }: InitiativeCardProps) {
  return (
    <Card className="bg-white border-2 border-gray-200 hover:border-red-300 transition-all duration-300 shadow-sm hover:shadow-md">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {title}
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          {description}
        </p>
        <Button 
          asChild
          className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
        >
          <a href={buttonHref}>
            {buttonText}
          </a>
        </Button>
      </CardContent>
    </Card>
  )
} 