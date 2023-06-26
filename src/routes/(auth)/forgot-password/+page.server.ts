import { fail, redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, url, locals: { supabase } }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;

		if (email === null) {
			return fail(420, { message: 'Email is required.', success: false, email });
		}
		if (password === null) {
			return fail(420, { message: 'Password is required.', success: false, email });
		}

		const { error } = await supabase.auth.signInWithPassword({
			email,
			password
		});

		if (error) {
			return fail(500, { message: 'Server error. Try again later.', success: false, email });
		}

		return redirect(304, '/meals');
	}
};
