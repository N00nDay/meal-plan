import { fail } from '@sveltejs/kit';

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

		const { error, data } = await supabase.auth.signUp({
			email,
			password,
			options: {
				emailRedirectTo: `${url.origin}/auth/callback`
			}
		});

		if (error) {
			return fail(500, { message: 'Server error. Try again later.', success: false, email });
		}

		if (!data.user) {
			return fail(500, { message: 'Server error. Try again later.', success: false, email });
		}

		const user = await supabase.from('users').upsert({ email, _user_id: data.user.id });

		if (user.error) {
			console.log('error', user.error);
			return fail(500, { message: 'Server error. Try again later.', success: false, email });
		}

		return {
			success: true
		};
	}
};
