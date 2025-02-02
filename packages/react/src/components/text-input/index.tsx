"use client";

import { ComponentRef, forwardRef, ReactNode } from "react";
import { Interpolation } from "styled-components/dist/types";
import { Input, Prefix, TextInputContainer } from "./styles";

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	as?: React.ElementType;
	$size?: "md" | "lg";
	$prefix?: string;
	$startIcon?: ReactNode;
	$endIcon?: ReactNode;
	$hasError?: boolean;
	$css?: Interpolation<TextInputProps>;
	asChild?: boolean;
}

export const TextInput = forwardRef<ComponentRef<typeof Input>, TextInputProps>(
	({ $prefix, $startIcon, $endIcon, $hasError, $size, ...props }, ref) => {
		return (
			<TextInputContainer $startIcon={$startIcon} $endIcon={$endIcon} $hasError={$hasError} $size={$size}>
				{$startIcon}
				{!!$prefix && <Prefix>{$prefix}</Prefix>}
				<Input ref={ref} {...props} />
				{$endIcon}
			</TextInputContainer>
		);
	}
);

TextInput.displayName = "TextInput";
