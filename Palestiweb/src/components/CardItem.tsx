import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from "@/components/ui/item"
import { Button } from "@/components/ui/button"

interface CardItemProps {
  title: string
  description: string
  imgSrc: string
  isDark: boolean
  actionText?: string
  onClick?: () => void       // 👈 nueva prop para manejar clics
  children?: React.ReactNode
}

export function CardItem({
  title,
  description,
  imgSrc,
  isDark,
  actionText,
  onClick,
  children
}: CardItemProps) {
  return (
    <Item
      variant="outline"
      className="flex flex-col items-start justify-start h-auto min-h-fit p-6 w-90 transition-transform duration-300 hover:scale-[1.02]"
    >
      <ItemContent className="flex flex-col gap-2 text-left">
        <ItemTitle className="w-full text-center text-lg font-semibold">
          {title}
        </ItemTitle>

        <img
          src={imgSrc}
          alt={title}
          className="aspect-square w-full rounded-md object-cover border border-border"
        />

        <ItemDescription className="line-clamp-none leading-relaxed text-sm opacity-90">
          {description}
        </ItemDescription>
      </ItemContent>

      <ItemActions className="w-full flex justify-center mt-4">
        {children ? (
          children
        ) : (
          <Button
            size="sm"
            onClick={onClick} // 👈 aquí se ejecuta la función pasada desde el padre
            className={`transition-colors duration-300 border ${
              isDark
                ? "bg-white text-black border-white hover:bg-gray-200"
                : "bg-black text-white border-black hover:bg-gray-800"
            }`}
          >
            {actionText || "Ver más"}
          </Button>
        )}
      </ItemActions>
    </Item>
  )
}
