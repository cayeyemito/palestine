import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from "@/components/ui/item"
import { Button } from "@/components/ui/button"

interface CardItemProps {
  title: string
  description: string
  imgSrc: string
  isDark: boolean
  actionText?: string
  children?: React.ReactNode
}

export function CardItem({ title, description, imgSrc, isDark, actionText, children }: CardItemProps) {
  return (
    <Item variant="outline" className="flex flex-col items-start justify-start h-auto min-h-fit p-6 w-90">
      <ItemContent className="flex flex-col gap-2 text-left">
        <ItemTitle className="w-full text-center text-lg">{title}</ItemTitle>
        <img src={imgSrc} alt={title} className="aspect-square w-full rounded-sm object-cover rounded-md border border-border" />
        <ItemDescription className="line-clamp-none leading-relaxed">{description}</ItemDescription>
      </ItemContent>
      <ItemActions className="w-full flex justify-center">
        {children ? children : (
          <Button size="sm" className={isDark ? "bg-white text-black border-white" : "bg-black text-white border-black"}>
            {actionText || "Ver más"}
          </Button>
        )}
      </ItemActions>
    </Item>
  )
}
