import React from 'react'
import {
  Search, Terminal, AlertCircle, Info, Check, X, Plus, Minus,
  ChevronRight, ChevronLeft, ChevronDown, ChevronUp,
  Sun, Moon, Monitor, Settings, User, Users, Home,
  Mail, Phone, Calendar, Clock, Bell, Star, Heart,
  Trash, Edit, Copy, Download, Upload, ExternalLink,
  ArrowRight, ArrowLeft, Menu, MoreHorizontal, MoreVertical,
  Loader2, RefreshCw, RotateCcw, ZoomIn, ZoomOut,
  Eye, EyeOff, Lock, Unlock, Shield, Key,
  File, Folder, Image, Video, Music, Code,
  BarChart3, TrendingUp, TrendingDown, Zap, Globe,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import { Progress } from '@/components/ui/progress'
import { Switch } from '@/components/ui/switch'
import { Checkbox } from '@/components/ui/checkbox'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip'
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuLabel } from '@/components/ui/dropdown-menu'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table'
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb'
import { ScrollArea } from '@/components/ui/scroll-area'

export const previewScope: Record<string, unknown> = {
  React,
  Button,
  Badge,
  Input,
  Label,
  Textarea,
  Separator,
  Skeleton,
  Progress,
  Switch,
  Checkbox,
  Alert, AlertTitle, AlertDescription,
  Avatar, AvatarImage, AvatarFallback,
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
  Select, SelectTrigger, SelectValue, SelectContent, SelectItem,
  RadioGroup, RadioGroupItem,
  Tabs, TabsList, TabsTrigger, TabsContent,
  Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter,
  Tooltip, TooltipTrigger, TooltipContent, TooltipProvider,
  Popover, PopoverTrigger, PopoverContent,
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuLabel,
  Accordion, AccordionItem, AccordionTrigger, AccordionContent,
  Table, TableHeader, TableBody, TableRow, TableHead, TableCell,
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage,
  ScrollArea,
  // lucide-react 아이콘
  Search, Terminal, AlertCircle, Info, Check, X, Plus, Minus,
  ChevronRight, ChevronLeft, ChevronDown, ChevronUp,
  Sun, Moon, Monitor, Settings, User, Users, Home,
  Mail, Phone, Calendar, Clock, Bell, Star, Heart,
  Trash, Edit, Copy, Download, Upload, ExternalLink,
  ArrowRight, ArrowLeft, Menu, MoreHorizontal, MoreVertical,
  Loader2, RefreshCw, RotateCcw, ZoomIn, ZoomOut,
  Eye, EyeOff, Lock, Unlock, Shield, Key,
  File, Folder, Image, Video, Music, Code,
  BarChart3, TrendingUp, TrendingDown, Zap, Globe,
}
