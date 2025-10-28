'use client';

import { useState, useTransition } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { checkLinkStatus } from '@/lib/actions';
import { LinkStatusSchema, type LinkStatusFormValues } from '@/lib/validators';
import type { LinkStatusResult } from '@/lib/definitions';
import { StatusDisplay } from './status-display';

const initialState: LinkStatusResult = {
  status: null,
  message: '',
};

export function LinkChecker() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<LinkStatusResult>(initialState);
  
  const form = useForm<LinkStatusFormValues>({
    resolver: zodResolver(LinkStatusSchema),
    defaultValues: {
      pan: '',
      aadhaar: '',
    },
    mode: 'onTouched'
  });

  function onSubmit(data: LinkStatusFormValues) {
    startTransition(async () => {
      const formData = new FormData();
      formData.append('pan', data.pan);
      formData.append('aadhaar', data.aadhaar);
      const res = await checkLinkStatus(formData);
      setResult(res);
    });
  }

  return (
    <div className="z-10 mt-8 w-full max-w-md space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <Card className="overflow-hidden shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Enter Your Details</CardTitle>
              <CardDescription>
                Provide your PAN and Aadhaar number to check the linking status. (Unofficial)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="pan"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>PAN Number</FormLabel>
                    <FormControl>
                      <Input placeholder="ABCDE1234F" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="aadhaar"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Aadhaar Number</FormLabel>
                    <FormControl>
                      <Input type="tel" inputMode="numeric" placeholder="123456789012" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full" size="lg" disabled={isPending}>
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Checking Status...
                  </>
                ) : (
                  'Check Status'
                )}
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Form>

      {result.status && <StatusDisplay result={result} />}
    </div>
  );
}
